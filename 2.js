// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach
  (anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute
        ('href')).scrollIntoView({
          behavior: 'smooth'
        });
    });
  });

//navbar scroll effect 
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  window.scrollY > 50 ?
    navbar.style.backgroundcolor = 'rgba(10, 10,10,0.98)' :
    navbar.style.backgroundcolor = 'transparent';
});

    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark");
      if (body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️ Light";
      } else {
        toggleBtn.textContent = "🌙 Dark";
      }
    });
    document.querySelector("#theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light");
});
 // Hamburger Menu Functionality
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
        });

        // Theme Toggle Functionality
        document.getElementById('theme-toggle').addEventListener('click', function() {
            const currentTheme = this.textContent;
            if (currentTheme.includes('Dark')) {
                this.textContent = '☀️ Light';
                document.documentElement.style.setProperty('--bg', '#ffffff');
                document.documentElement.style.setProperty('--text', '#000000');
            } else {
                this.textContent = '🌙 Dark';
                document.documentElement.style.setProperty('--bg', '#0a0a0a');
                document.documentElement.style.setProperty('--text', '#ffffff');
            }
        });


