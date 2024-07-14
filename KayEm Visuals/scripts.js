const navBtn = document.getElementById('nav-btn');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');
const content = document.querySelector('.content');
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav a');

navBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
    overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
    nav.classList.remove('show');
    overlay.classList.remove('show');
});

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = link.getAttribute('data-section').toLowerCase();
        showSection(sectionId);
        nav.classList.remove('show');
        overlay.classList.remove('show');
    });
});

// Show the home section by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});

function showSection(sectionId) {
    sections.forEach(section => {
        if (section.id.toLowerCase() === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Ensure nav button remains fixed
window.addEventListener('scroll', () => {
    navBtn.style.top = `${window.scrollY}px`;
});

