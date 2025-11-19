// ===================================
// Smooth Scrolling & Fade-in Animations
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Initialize all functionality
    initSmoothScrolling();
    initScrollAnimations();
    initHeaderScroll();
    initLinkAnimations();

});

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
function initSmoothScrolling() {
    // Get all navigation links that point to sections
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Don't prevent default for empty hash
            if (href === '#') return;

            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Get header height for offset
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;

                // Calculate position with offset
                const targetPosition = targetElement.offsetTop - headerHeight;

                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL hash without jumping
                history.pushState(null, null, href);
            }
        });
    });
}

// ===================================
// Scroll-triggered Fade-in Animations
// ===================================
function initScrollAnimations() {
    // Get all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');

    // Options for Intersection Observer
    const observerOptions = {
        threshold: 0.15,  // Trigger when 15% of element is visible
        rootMargin: '0px 0px -50px 0px'  // Trigger slightly before element enters viewport
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class to trigger animation
                entry.target.classList.add('visible');

                // Optional: Stop observing after animation (performance optimization)
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove visible class when scrolling back up
                // entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// ===================================
// Header Scroll Effect
// ===================================
function initHeaderScroll() {
    const header = document.querySelector('.header');

    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ===================================
// Enhanced Link Hover Animations
// ===================================
function initLinkAnimations() {
    // Add ripple effect on contact link clicks
    const contactLinks = document.querySelectorAll('.contact-link');

    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// ===================================
// Skill Tag Shuffle Animation (Optional Enhancement)
// ===================================
function initSkillTagShuffle() {
    const skillCategories = document.querySelectorAll('.skill-category');

    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            const tags = this.querySelectorAll('.skill-tag');
            tags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'scale(1.05)';
                }, index * 50);
            });
        });

        category.addEventListener('mouseleave', function() {
            const tags = this.querySelectorAll('.skill-tag');
            tags.forEach(tag => {
                tag.style.transform = 'scale(1)';
            });
        });
    });
}

// ===================================
// Parallax Effect for Hero Section (Optional)
// ===================================
function initParallaxEffect() {
    const heroSection = document.querySelector('.hero-section');

    if (!heroSection) return;

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;

        heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
}

// ===================================
// Typing Animation for Hero Title (Optional)
// ===================================
function initTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title');

    if (!heroTitle) return;

    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';

    let charIndex = 0;

    function typeChar() {
        if (charIndex < text.length) {
            heroTitle.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, 80);
        }
    }

    // Start typing after a short delay
    setTimeout(typeChar, 500);
}

// ===================================
// Active Section Highlighting in Navigation
// ===================================
function initActiveNavHighlight() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===================================
// Performance: Throttle Scroll Events
// ===================================
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===================================
// Accessibility: Skip to Content Link
// ===================================
function initAccessibility() {
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Press '/' to focus on first navigation link
        if (e.key === '/' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            const firstNavLink = document.querySelector('.nav-link');
            if (firstNavLink) firstNavLink.focus();
        }
    });
}

// ===================================
// Initialize Optional Features
// ===================================
// Uncomment the features you want to enable:

// initSkillTagShuffle();
// initParallaxEffect();
// initTypingAnimation();
// initActiveNavHighlight();
initAccessibility();

// ===================================
// Console Welcome Message
// ===================================
console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; font-weight: bold; color: #0066FF;');
console.log('%cInterested in the code? Check out the source on GitHub!', 'font-size: 14px; color: #666;');
