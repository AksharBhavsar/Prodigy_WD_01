document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#333';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.background = 'linear-gradient(90deg, #4a90e2, #007aff)';
    }
});

const navItems = document.querySelectorAll('.nav-item a');
navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#007aff';
        item.style.backgroundColor = 'white';
        item.style.borderRadius = '10px';
    });

    item.addEventListener('mouseout', () => {
        item.style.color = 'white';
        item.style.backgroundColor = 'transparent';
        item.style.borderRadius = '0';
    });
});
