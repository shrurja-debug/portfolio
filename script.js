// Tab switching functionality
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Add active class to clicked button
    event.target.classList.add('active');
}

// Smooth scroll on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set home tab as active by default
    const homeTab = document.getElementById('home');
    if (homeTab) {
        homeTab.classList.add('active');
    }

    const firstTabBtn = document.querySelector('.tab-btn');
    if (firstTabBtn) {
        firstTabBtn.classList.add('active');
    }
});

// Add some interactivity to art cards
const artCards = document.querySelectorAll('.art-card');
artCards.forEach(card => {
    card.addEventListener('click', function() {
        // You can add a modal or lightbox effect here
        console.log('Art card clicked!');
    });
});
