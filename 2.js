// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to update navbar background based on theme and scroll (GLOBAL SCOPE)
function updateNavbarBackground() {
    const navbar = document.querySelector('.navbar');
    const isLightMode = document.body.classList.contains('light');
    const isScrolled = window.scrollY > 50;
    
    if (isScrolled) {
        if (isLightMode) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        }
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
}

// Navbar scroll effect with theme awareness
window.addEventListener('scroll', updateNavbarBackground);

// Hamburger Menu & Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const body = document.body;
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        console.log('Menu toggled!', navLinks.classList.contains('active'));
    });
    
    // Close menu when clicking on nav links
    const navLinkItems = navLinks.querySelectorAll('a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Theme Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    
    // Set default theme to dark
    if (!body.classList.contains('light')) {
        themeToggle.textContent = '☀️ Light';
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light');
        
        // Update button text based on current theme
        if (body.classList.contains('light')) {
            this.textContent = '🌙 Dark';
        } else {
            this.textContent = '☀️ Light';
        }
        
        // Immediately update navbar after theme change
        updateNavbarBackground();
        
        console.log('Theme toggled! Light mode:', body.classList.contains('light'));
    });
});