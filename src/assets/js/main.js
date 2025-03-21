/**
 * Main JavaScript file for Eric Terpstra's portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    // Add any client-side functionality here
    console.log('Portfolio site loaded');

    // Example: Add active class to links when clicked
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', () => {
            link.classList.add('active');
        });
    });
});
