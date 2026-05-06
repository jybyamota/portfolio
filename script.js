// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        // Only prevent default for valid section links
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Update active navigation link on scroll
function updateActiveNavLink() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Animate elements on scroll
function animateElementsOnScroll() {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        if (isInViewport(project)) {
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
function initializeAnimations() {
    document.querySelectorAll('.project-card').forEach(project => {
        project.style.opacity = '0';
        project.style.transform = 'translateY(20px)';
        project.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// Setup event listeners
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeAnimations();
        animateElementsOnScroll();
        updateActiveNavLink();
    });
} else {
    initializeAnimations();
    animateElementsOnScroll();
    updateActiveNavLink();
}

window.addEventListener('scroll', animateElementsOnScroll);
window.addEventListener('load', animateElementsOnScroll);
