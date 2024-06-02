document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        {
            title: "Spaghetti Bolognese",
            ingredients: "Spaghetti, Ground Beef, Tomato Sauce, Onion, Garlic, Olive Oil, Salt, Pepper",
            instructions: "Cook spaghetti. In a separate pan, cook ground beef with onion and garlic. Add tomato sauce and simmer. Serve sauce over spaghetti."
        },
        {
            title: "Chicken Curry",
            ingredients: "Chicken, Curry Powder, Coconut Milk, Onion, Garlic, Ginger, Salt, Pepper",
            instructions: "Cook chicken with onion, garlic, and ginger. Add curry powder and coconut milk. Simmer until chicken is cooked through. Serve with rice."
        },
        {
            title: "Vegetable Stir Fry",
            ingredients: "Mixed Vegetables, Soy Sauce, Garlic, Ginger, Olive Oil, Salt, Pepper",
            instructions: "Stir fry vegetables with garlic and ginger in olive oil. Add soy sauce and cook until vegetables are tender. Serve with rice or noodles."
        }
    ];

    const searchBar = document.getElementById('search-bar');
    const recipeList = document.getElementById('recipe-list');

    function displayRecipes(recipesToDisplay) {
        recipeList.innerHTML = '';
        recipesToDisplay.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');
            recipeCard.innerHTML = `
                <h2>${recipe.title}</h2>
                <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            `;
            recipeList.appendChild(recipeCard);
        });
    }

    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.toLowerCase().includes(searchTerm)
        );
        displayRecipes(filteredRecipes);
    });

    displayRecipes(recipes);
});
