document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking a nav link (for better UX on mobile)
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        menuToggle.setAttribute('aria-expanded', false);
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });
});
