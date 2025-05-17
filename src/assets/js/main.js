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
            // Remove active class from any other project links
            projectLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
