import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
    >`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `
        <section class="recipe">
            <img class="recipe-image" src="${recipe.image}" alt="${recipe.name} Image">
            <section class="recipe-info">
                <h2 class="tags">${recipe.tags.join(', ')}</h2>
                <h3 class="recipe-title">${recipe.name}</h3>
                ${ratingTemplate(recipe.rating)}
                <p class="recipe-description">${recipe.description}</p>
            </section>
        </section>
    `;
}

function displayRandomRecipe() {
    const randomRecipe = getRandomListEntry(recipes);
    const mainContent = document.getElementById('maincontent');
    mainContent.innerHTML = recipeTemplate(randomRecipe);
}

// Function to filter and sort recipes
function filter(query) {
    const filtered = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(query) ||
               recipe.description.toLowerCase().includes(query) ||
               (recipe.tags && recipe.tags.find(tag => tag.toLowerCase().includes(query))) ||
               (recipe.recipeIngredient && recipe.recipeIngredient.find(recipeIngredient => recipeIngredient.toLowerCase().includes(query)));
    });

    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
}

// Function to handle search
function searchHandler(e) {
    e.preventDefault();
    const query = document.getElementById('search-bar').value.toLowerCase();
    const filteredRecipes = filter(query);
    renderRecipes(filteredRecipes);
}

// Function to render recipes to the page
function renderRecipes(recipes) {
    const mainContent = document.getElementById('maincontent');
    mainContent.innerHTML = recipes.map(recipe => recipeTemplate(recipe)).join('');
}

// Event listener for search button click
document.getElementById('search-button').addEventListener('click', searchHandler);

// Run this function when the page loads
document.addEventListener('DOMContentLoaded', displayRandomRecipe);