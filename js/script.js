// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Portfolio Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(',');
                
                if (filter === 'all' || categories.includes(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                // Get the height of the top nav if it's visible
                const topNavHeight = document.querySelector('.top-nav').offsetHeight || 0;
                
                window.scrollTo({
                    top: target.offsetTop - topNavHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section');
    console.log("Sections found:", sections.length);
    const navLinks = document.querySelectorAll('.nav-links a, .top-nav-links a');
    console.log("Nav links found:", navLinks.length);
    
    function highlightNavLink() {
        const scrollPosition = window.scrollY;
        const topNav = document.querySelector('.top-nav');
        const topNavHeight = topNav ? topNav.offsetHeight : 0;
        
        sections.forEach(section => {
            if (!section) return; // Skip if section is null
            
            const sectionTop = section.offsetTop - topNavHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    if (!link) return; // Skip if link is null
                    
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Initial call to highlight the appropriate nav link
    highlightNavLink();
    
    // Add scroll event listener
    window.addEventListener('scroll', highlightNavLink);
});