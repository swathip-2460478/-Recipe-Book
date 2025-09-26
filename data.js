const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        description: "A rich and creamy Italian pasta dish with Pecorino Romano and Guanciale.",
        image: "img/carbonara.jpeg",
        cuisine: "Italian",
        difficulty: "Medium",
        dietary: "Non-Vegetarian",
        prepTime: "20 minutes",
        ingredients: [
            "400g Spaghetti", "150g Guanciale (or Pancetta)", "3 large Egg Yolks", "50g grated Pecorino Romano cheese", "Black pepper"
        ],
        steps: [
            "Cook the spaghetti according to package directions.", "Cut the guanciale into cubes and fry in a pan until crispy. Remove from heat.", "In a bowl, whisk the egg yolks with the grated Pecorino Romano and pepper.", "Drain the pasta, reserving some cooking water. Immediately toss the pasta with the guanciale and the egg/cheese mixture.", "Add a splash of the reserved cooking water if needed to create a creamy sauce. Serve immediately."
        ]
    },
    {
        id: 2,
        title: "Vegetarian Black Bean Burger",
        description: "Hearty and flavorful homemade veggie burgers perfect for grilling or pan-frying.",
        image: "img/black-bean-burger.jpeg",
        cuisine: "American",
        difficulty: "Easy",
        dietary: "Vegetarian",
        prepTime: "40 minutes",
        ingredients: [
            "1 can Black Beans (rinsed and drained)", "1/2 cup Bread Crumbs", "1/4 cup finely chopped Onion", "1 tsp Cumin", "Salt and Pepper", "1 Egg (optional, for binding)"
        ],
        steps: [
            "Mash the black beans in a bowl, leaving some texture.", "Mix in the bread crumbs, onion, cumin, salt, pepper, and egg (if using).", "Form the mixture into four patties.", "Cook patties in a lightly oiled pan for 5-7 minutes per side, until heated through and lightly browned."
        ]
    },
    {
        id: 3,
        title: "Quick Chicken Curry",
        description: "An aromatic and spicy Indian chicken curry ready in under an hour.",
        image: "img/chicken-curry.jpeg",
        cuisine: "Indian",
        difficulty: "Medium",
        dietary: "Non-Vegetarian",
        prepTime: "45 minutes",
        ingredients: [
            "500g Chicken Breast (cubed)", "1 large Onion (chopped)", "2 tbsp Curry Powder", "1 can Crushed Tomatoes", "200ml Coconut Milk"
        ],
        steps: [
            "Sauté the onion in a large pot until soft.", "Add the cubed chicken and cook until lightly browned.", "Stir in the curry powder and cook for 1 minute.", "Pour in the crushed tomatoes and coconut milk. Bring to a simmer.", "Reduce heat and cook for 20-30 minutes, or until chicken is cooked through. Serve with rice."
        ]
    },
    {
        id: 4,
        title: "Lemon Blueberry Scones",
        description: "Fluffy, tender scones bursting with fresh lemon zest and blueberries.",
        image: "img/lemon-scones.jpeg",
        cuisine: "Dessert",
        difficulty: "Medium",
        dietary: "Vegetarian",
        prepTime: "30 minutes",
        ingredients: [
            "2 cups All-Purpose Flour", "1/2 cup Sugar", "1 tbsp Baking Powder", "1/2 cup cold Butter (cubed)", "1 large Egg", "1/2 cup Milk", "1 cup fresh Blueberries", "Zest of 1 Lemon"
        ],
        steps: [
            "Preheat oven to 400°F (200°C).", "Mix flour, sugar, baking powder, and salt.", "Cut in butter until the mixture resembles coarse crumbs.", "In a separate bowl, whisk egg, milk, and lemon zest. Add to dry ingredients and gently fold in blueberries.", "Drop dough onto a baking sheet. Bake for 15-20 minutes until golden."
        ]
    },
    {
        id: 5,
        title: "Mediterranean Quinoa Salad",
        description: "A light, healthy, and refreshing salad with feta, olives, and fresh herbs.",
        image: "img/quinoa-salad.jpeg",
        cuisine: "Mediterranean",
        difficulty: "Easy",
        dietary: "Vegetarian",
        prepTime: "25 minutes",
        ingredients: [
            "1 cup cooked Quinoa", "1 cup Cucumber (diced)", "1 cup Cherry Tomatoes (halved)", "1/2 cup Feta Cheese (crumbled)", "1/4 cup Kalamata Olives", "2 tbsp Olive Oil", "1 tbsp Lemon Juice"
        ],
        steps: [
            "Cook quinoa and let it cool completely.", "Combine cooled quinoa, cucumber, tomatoes, feta, and olives in a large bowl.", "Whisk olive oil and lemon juice for the dressing. Pour over the salad.", "Toss gently to combine. Season with salt and pepper. Serve chilled."
        ]
    },
    {
        id: 6,
        title: "Decadent Chocolate Lava Cake",
        description: "Warm, individual chocolate cakes with a molten, gooey center.",
        image: "img/lava-cake.jpeg",
        cuisine: "Dessert",
        difficulty: "Hard",
        dietary: "Vegetarian",
        prepTime: "20 minutes",
        ingredients: [
            "4 oz Dark Chocolate", "4 tbsp Unsalted Butter", "2 large Eggs", "2 tbsp Sugar", "1 tbsp Flour"
        ],
        steps: [
            "Preheat oven to 425°F (220°C). Grease and flour two ramekins.", "Melt the chocolate and butter together in a microwave or double boiler. Stir until smooth.", "In a separate bowl, whisk eggs and sugar until light and fluffy.", "Fold the melted chocolate mixture into the egg mixture. Gently fold in the flour.", "Pour batter into the prepared ramekins. Bake for 12-14 minutes. The edges should be firm, and the center still soft. Serve immediately with ice cream."
        ]
    }
];

// Helper function to extract unique filter options for the dropdowns
function getFilterOptions(key) {
    const options = new Set();
    recipes.forEach(r => options.add(r[key]));
    return Array.from(options).sort();
}