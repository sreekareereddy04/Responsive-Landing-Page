document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('main-nav');
    const heroSection = document.getElementById('home');
    const heroHeight = heroSection.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > heroHeight * 0.8) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate gradient colors for navbar
    function animateNavbarGradient() {
        const colors = [
            'linear-gradient(45deg, #ff9a9e, #fad0c4)',
            'linear-gradient(45deg, #a18cd1, #fbc2eb)',
            'linear-gradient(45deg, #fbc2eb, #a6c1ee)',
            'linear-gradient(45deg, #84fab0, #8fd3f4)',
            'linear-gradient(45deg, #a6c0fe, #f68084)',
            'linear-gradient(45deg, #d4fc79, #96e6a1)',
            'linear-gradient(45deg, #e0c3fc, #8ec5fc)'
        ];
        
        let currentIndex = 0;
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % colors.length;
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.style.background = colors[currentIndex];
            });
        }, 3000);
    }
    
    // Start the gradient animation
    animateNavbarGradient();

    // Add hover effect to nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'background 0.3s ease';
            this.style.background = 'linear-gradient(45deg, #e73c7e, #23a6d5)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.background = 'transparent';
        });
    });
});