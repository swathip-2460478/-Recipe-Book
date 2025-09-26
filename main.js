$(document).ready(function() {
    const $recipeList = $('#recipeList');
    const $search = $('#recipeSearch');
    const $cuisineFilter = $('#cuisineFilter');
    const $difficultyFilter = $('#difficultyFilter');
    const $dietaryFilter = $('#dietaryFilter');
    const $resetButton = $('#resetFilters');
    
    // --- 1. Dynamic Filter Population ---
    function populateFilters() {
        // Assuming getFilterOptions is defined in data.js
        getFilterOptions('cuisine').forEach(option => {
            $cuisineFilter.append(`<option value="${option}">${option}</option>`);
        });
        getFilterOptions('difficulty').forEach(option => {
            $difficultyFilter.append(`<option value="${option}">${option}</option>`);
        });
        getFilterOptions('dietary').forEach(option => {
            $dietaryFilter.append(`<option value="${option}">${option}</option>`);
        });
    }

    // --- 2. Recipe Card Rendering ---
    function renderRecipes(recipeArray) {
        $recipeList.empty(); 

        if (recipeArray.length === 0) {
            $recipeList.append('<div class="col-12"><p class="text-center lead my-5 p-4 bg-warning-subtle border border-warning rounded">Oops! No recipes match your current search and filter selections.</p></div>');
            return;
        }

        recipeArray.forEach(recipe => {
            // Helper for color coding the badges
            const diffColor = recipe.difficulty === 'Easy' ? 'success' : (recipe.difficulty === 'Medium' ? 'warning' : 'danger');
            const dietIcon = recipe.dietary === 'Vegetarian' ? '<i class="fas fa-leaf text-success me-1"></i>' : '<i class="fas fa-drumstick-bite text-danger me-1"></i>';
            const dietColor = recipe.dietary === 'Vegetarian' ? 'primary' : 'secondary';
            
            const recipeCard = `
                <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                    <div class="card h-100 shadow-lg border-0 recipe-card">
                        <div class="image-wrapper">
                            <img src="${recipe.image}" class="card-img-top recipe-img" alt="${recipe.title}">
                            <span class="badge bg-dark cuisine-badge">${recipe.cuisine}</span>
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-dark">${recipe.title}</h5>
                            <p class="card-text text-muted">${recipe.description.substring(0, 70)}...</p>
                            
                            <div class="mt-auto d-flex justify-content-between align-items-center mb-3">
                                <small class="text-muted"><i class="fas fa-clock me-1"></i> ${recipe.prepTime}</small>
                                <div>
                                    <span class="badge bg-${dietColor} me-1">${dietIcon} ${recipe.dietary}</span>
                                    <span class="badge bg-${diffColor}"><i class="fas fa-chart-bar me-1"></i> ${recipe.difficulty}</span>
                                </div>
                            </div>

                            <a href="recipe-detail.html?id=${recipe.id}" class="btn btn-primary mt-2">View Recipe</a>
                        </div>
                    </div>
                </div>
            `;
            $recipeList.append(recipeCard);
        });
    }

    // --- 3. Filtering and Searching Logic ---
    function filterRecipes() {
        const searchTerm = $search.val().toLowerCase();
        const cuisine = $cuisineFilter.val();
        const difficulty = $difficultyFilter.val();
        const dietary = $dietaryFilter.val();

        const filtered = recipes.filter(recipe => {
            // Search Filter: Check title OR description
            const matchesSearch = recipe.title.toLowerCase().includes(searchTerm) || 
                                  recipe.description.toLowerCase().includes(searchTerm);

            // Category Filters: Check if selected or "All" (empty string)
            const matchesCuisine = !cuisine || recipe.cuisine === cuisine;
            const matchesDifficulty = !difficulty || recipe.difficulty === difficulty;
            const matchesDietary = !dietary || recipe.dietary === dietary;

            return matchesSearch && matchesCuisine && matchesDifficulty && matchesDietary;
        });

        renderRecipes(filtered);
    }

    // --- 4. Event Listeners and Initialization ---
    // Attach event listeners to all filters/search
    $search.on('keyup', filterRecipes);
    $cuisineFilter.on('change', filterRecipes);
    $difficultyFilter.on('change', filterRecipes);
    $dietaryFilter.on('change', filterRecipes);
    
    // Reset function
    $resetButton.on('click', function() {
        $search.val('');
        $cuisineFilter.val('');
        $difficultyFilter.val('');
        $dietaryFilter.val('');
        filterRecipes(); // Re-render all recipes
    });

    // Run on load
    populateFilters();
    renderRecipes(recipes);
});