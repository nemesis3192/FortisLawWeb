/* script.js */

// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Modal Logic
function openModal(title, description) {
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDescription');

    if (modal && modalTitle && modalDesc) {
        modalTitle.textContent = title;
        // Use innerHTML if description contains HTML tags, otherwise textContent
        modalDesc.innerHTML = description;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal() {
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Close modal when clicking outside content
window.addEventListener('click', function (e) {
    const modal = document.getElementById('serviceModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('nav ul');
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});