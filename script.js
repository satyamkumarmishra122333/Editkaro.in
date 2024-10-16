
document.querySelector('.menu').addEventListener('click', () => {
    const nav_option = document.querySelector('.nav-option');

    // Toggle the active class to show/hide the menu
    if (nav_option.classList.contains('active')) {
        nav_option.classList.remove('active'); // Hide the menu
    } else {
        nav_option.classList.add('active'); // Show the menu
    }
});


// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const nav_option = document.querySelector('.nav-option');
    const menu = document.querySelector('.menu');

    if (!nav_option.contains(event.target) && !menu.contains(event.target) && nav_option.classList.contains('active')) {
        nav_option.classList.remove('active'); // Hide the menu
    }
});

document.getElementById('video-select').addEventListener('change', function () {
    const selectedValue = this.value;
    const targetSection = document.getElementById(selectedValue); // Get the target section based on the value

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target section
    }
});
