alert("loaded from src/js/main.js");

// Function to load HTML components
function loadComponent(selector, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(err => console.error(`Error loading ${url}:`, err));
}

// Load header and footer
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("#header-placeholder", "components/header.html");
    loadComponent("#footer-placeholder", "components/footer.html");
});
