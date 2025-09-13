document.addEventListener('DOMContentLoaded', function() {
    // Set fallback image if profile picture is missing
    const profilePic = document.getElementById('profile-pic');
    if (profilePic) {
        profilePic.onerror = function() {
            this.src = 'https://via.placeholder.com/150';
            this.alt = 'Default Profile Picture';
        };
    }

    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Add animation class to links when hovering
    const linkItems = document.querySelectorAll('.link-item');
    linkItems.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'scale(1.2)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'scale(1)';
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize Bootstrap tabs
    const tabButtons = document.querySelectorAll('.minecraft-btn[data-bs-toggle="pill"]');
    const tabContents = document.querySelectorAll('.tab-pane');
    
    // Show the first tab by default
    tabContents[0].classList.add('show', 'active');
    
    // Handle tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target tab ID from the button's data attribute
            const targetId = this.getAttribute('data-bs-target');
            const targetTab = document.querySelector(targetId);
            
            if (!targetTab) return;
            
            // Hide all tab contents
            tabContents.forEach(tab => {
                tab.classList.remove('show', 'active');
            });
            
            // Remove active class from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Show the selected tab and mark button as active
            targetTab.classList.add('show', 'active');
            this.classList.add('active');
        });
    });
    
    // Add animation to tab content
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => {
        pane.addEventListener('show.bs.tab', function() {
            this.style.opacity = 0;
            setTimeout(() => {
                this.style.opacity = 1;
            }, 10);
        });
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});
