
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

var typed = new Typed('.element', {
    strings: ["Welcome to KayVisuals", "Your Favorite Graphics Designer"],
    typeSpeed: 50
});
VANTA.BIRDS({
    el: "#home",
    color: 0x6e45e2,
    shininess: 50,
    waveHeight: 20,
    waveSpeed: 1,
    mouseControls: true,
});
VANTA.GLOBE({
    el: "#nav",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
  });
//   VANTA.GLOBE({
//     el: "#nav",
//     color: 0x6e45e2,
//     shininess: 50,
//     waveHeight: 20,
//     waveSpeed: 1,
//     mouseControls: true,
// });
