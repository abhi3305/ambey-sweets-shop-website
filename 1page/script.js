// Array of predefined suggestions with corresponding URLs and image URLs
const suggestions = [
    { name: "Kaju Katli", url: "product Description\kaju katli .html", image: "" },
    { name: "Gulab Jamun", url: "gulab-jamun.html", image: "images/gulab-jamun.jpg" },
    { name: "Jalebi", url: "jalebi.html", image: "images/jalebi.jpg" },
    { name: "Laddu", url: "laddu.html", image: "images/laddu.jpg" },
    { name: "Rasgulla", url: "rasgulla.html", image: "images/rasgulla.jpg" },
    { name: "Milk Cake", url: "milk-cake.html", image: "images/milk-cake.jpg" },
    { name: "Peda", url: "peda.html", image: "images/peda.jpg" },
    { name: "Barfi", url: "barfi.html", image: "images/barfi.jpg" },
    { name: "Pakora", url: "pakora.html", image: "images/pakora.jpg" },
    { name: "Samosa", url: "samosa.html", image: "images/samosa.jpg" }
];

const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');
const autocompleteBox = document.createElement('div');
autocompleteBox.classList.add('autocomplete-box');
document.querySelector('.nav-search').appendChild(autocompleteBox);

// Event listener for input
searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();
    autocompleteBox.innerHTML = ''; // Clear previous suggestions
    if (query) {
        const filteredSuggestions = suggestions.filter(item =>
            item.name.toLowerCase().includes(query)
        );
        filteredSuggestions.forEach(suggestion => {
            const suggestionElement = document.createElement('div');
            suggestionElement.classList.add('suggestion-item');

            // Create and append the product image
            const imageElement = document.createElement('img');
            imageElement.src = suggestion.image;
            imageElement.alt = suggestion.name;
            imageElement.classList.add('suggestion-image');
            suggestionElement.appendChild(imageElement);

            // Create and append the suggestion name
            const nameElement = document.createElement('span');
            nameElement.textContent = suggestion.name;
            suggestionElement.appendChild(nameElement);

            // Add click event for redirection
            suggestionElement.addEventListener('click', () => {
                window.location.href = suggestion.url; // Redirect to the corresponding page
            });

            autocompleteBox.appendChild(suggestionElement);
        });
    }
});

// Clear autocomplete suggestions when the input loses focus
searchInput.addEventListener('blur', () => {
    setTimeout(() => autocompleteBox.innerHTML = '', 100); // Delay to allow click selection
});

// Handle search functionality
searchIcon.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const matchedSuggestion = suggestions.find(item =>
        item.name.toLowerCase() === query
    );
    if (matchedSuggestion) {
        window.location.href = matchedSuggestion.url; // Redirect to the matched page
    } else {
        alert('No matching page found.');
    }
});





// Function to check if the user is logged in and update the navbar
function updateNavbarGreeting() {
    const users = JSON.parse(localStorage.getItem('users')) || {}; // Get user data from localStorage
    const loggedInEmail = localStorage.getItem('loggedInEmail'); // Check the logged-in email

    const greetingElement = document.getElementById('greeting'); // Get the greeting element

    if (loggedInEmail && users[loggedInEmail]) {
        // If a user is logged in, update the greeting
        greetingElement.textContent = `Hello, ${users[loggedInEmail]}`;
    } else {
        // Default greeting if no user is logged in
        greetingElement.textContent = "Hello, sign in";
    }
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', updateNavbarGreeting);
