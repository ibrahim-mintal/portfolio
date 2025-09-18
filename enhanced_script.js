const scrollToTopBtn = document.getElementById('scroll-to-hero');

if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', function() {
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Show/hide scroll-to-top button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
      scrollToTopBtn.classList.add('is-visible');
    } else {
      scrollToTopBtn.classList.remove('is-visible');
    }
  });
  }

// Dark mode toggle
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    // Optionally save preference to localStorage
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // On page load, apply saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
}

// Navigation bar scroll effect
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Add class after scrolling 50px
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// Add counters to project cards
const projectCards = document.querySelectorAll('.project-card');
if (projectCards.length > 0) {
  projectCards.forEach((card, index) => {
    const counterElement = card.querySelector('.project-counter-card');
    if (counterElement) counterElement.textContent = `${index + 1} / ${projectCards.length}`;
  });
}
