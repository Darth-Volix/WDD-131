import reviews from './reviews.mjs';

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
            <div class="review-image-and-info">
                <img class="review-image" src="${review.image}" alt="${review.imagealt}">
                <section class="review-info">
                    <h2 class="review-title">${review.title}</h3>
                    <h3 class="tags">${review.tags.join(', ')}</h2>
                    <p class="review-date">${review.date}</p>
                    ${ratingTemplate(review.rating)}
                </section>
            </div>
            <p class="review-description">${review.review}</p>
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

function searchReviews(query) {
    const mainContent = document.getElementById('home-grid');
    mainContent.innerHTML = '';

    // If the search bar is empty, display a message
    if (!query.trim()) {
        mainContent.innerHTML = '<p>No reviews found matching your search criteria.</p>';
        return;
    }

    // Filter reviews by title or tags
    const filteredReviews = reviews.filter(review => {
        const lowerCaseQuery = query.toLowerCase();
        return review.title.toLowerCase().includes(lowerCaseQuery) || 
               review.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery));
    });

    if (filteredReviews.length > 0) {
        filteredReviews.forEach(review => {
            mainContent.innerHTML += reviewTemplate(review);
        });
    } else {
        mainContent.innerHTML = '<p>No reviews found matching your search criteria.</p>';
    }
}

// Event listener for search form
document.getElementById('search-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const query = document.getElementById('search-bar').value;
    searchReviews(query);
});

// Run this function when the page loads
document.addEventListener('DOMContentLoaded', displayRandomReviews);