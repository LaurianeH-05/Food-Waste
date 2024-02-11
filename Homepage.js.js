// JavaScript code for hover effect (optional)
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.borderBottom = '2px solid yellow';
    });
    link.addEventListener('mouseout', () => {
        link.style.borderBottom = 'none';
    });
});
