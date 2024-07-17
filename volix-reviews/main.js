import reviews from './reviews.mjs';

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

function reviewTemplate(review) {
    return `
        <section class="review">
            <img class="review-image" src="${review.image}" alt="${review.date} Image">
            <section class="review-info">
                <h2 class="tags">${review.tags.join(', ')}</h2>
                <h3 class="review-title">${review.date}</h3>
                ${ratingTemplate(review.rating)}
                <p class="review-description">${review.review}</p>
            </section>
        </section>
    `;
}

function displayRandomReviews() {
    const mainContent = document.getElementById('home-grid');

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Select 3 unique random reviews
    let selectedReviews = [];
    while (selectedReviews.length < 3) {
        const randomIndex = getRandomInt(0, reviews.length - 1);
        if (!selectedReviews.includes(reviews[randomIndex])) {
            selectedReviews.push(reviews[randomIndex]);
        }
    }

    // Append each selected review to the main content
    selectedReviews.forEach(review => {
        mainContent.innerHTML += reviewTemplate(review);
    });
}

// Function to filter and sort reviews 
function filter(query) {
    const filtered = reviews.filter(review => {
        return review.date.toLowerCase().includes(query) ||
               review.review.toLowerCase().includes(query) ||
               (review.tags && review.tags.find(tag => tag.toLowerCase().includes(query)));
    });
    return filtered;
}

// Function to handle search
function searchHandler(e) {
    e.preventDefault();
    const query = document.getElementById('search-bar').value.toLowerCase();
    const filteredReviews = filter(query);
    renderReviews(filteredReviews);
}

// Function to render reviews
function renderReviews(reviews) {
    const mainContent = document.getElementById('home-grid');
    mainContent.innerHTML = reviews.map(review => reviewTemplate(review)).join('');
}

// Event listener for search button click
document.getElementById('search-button').addEventListener('click', searchHandler);

// Run this function when the page loads
document.addEventListener('DOMContentLoaded', displayRandomReviews);