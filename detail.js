$(document).ready(function() {
    // 1. Get the recipe ID from the URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = parseInt(urlParams.get('id'));

    // 2. Find the corresponding recipe object in the data
    const recipe = recipes.find(r => r.id === recipeId);

    if (!recipe) {
        $('#recipeDetails').html('<p class="alert alert-danger text-center">Recipe not found! Please return to the main page.</p>');
        return;
    }

    // 3. Populate the HTML elements with the recipe data
    
    // Header Info
    $('#detailTitle').text(recipe.title);
    $('#detailDescription').text(recipe.description);
    $('#detailImage').attr('src', recipe.image).attr('alt', recipe.title);

    // Metadata
    $('#detailCuisine').text(recipe.cuisine);
    $('#detailDifficulty').text(recipe.difficulty);
    $('#detailPrepTime').text(recipe.prepTime);

    // Ingredients List
    const $ingredientsList = $('#detailIngredients');
    $ingredientsList.empty();
    recipe.ingredients.forEach(item => {
        $ingredientsList.append(`<li class="list-group-item d-flex align-items-center"><i class="fas fa-check-circle text-success me-2"></i>${item}</li>`);
    });

    // Steps List - Steps are already populated correctly in recipe-detail.html
    const $stepsList = $('#detailSteps');
    $stepsList.empty();
    recipe.steps.forEach(step => {
        $stepsList.append(`<li class="list-group-item">${step}</li>`);
    });
});