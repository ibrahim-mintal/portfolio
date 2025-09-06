const menuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-theme');
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// Close menu when clicking a nav link (for better UX on mobile)
if (navMenu) {
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        if (menuToggle) {
          menuToggle.setAttribute('aria-expanded', false);
          menuToggle.classList.remove('active');
        }
        navMenu.classList.remove('active');
      }
    });
  });
}

// Theme toggle functionality
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Project modal functionality
const projectModal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalImages = document.getElementById('modal-images');
const modalClose = document.querySelector('.modal-close');

// Project to images mapping
const projectImages = {
  'AWS Terraform Infrastructure Deployment': ['AWS Terraform Infrastructure Deployment.png'],
  'Scalable Web Application Architecture on AWS with ALB and Auto Scaling': [
    'Scalable Web Application Architecture on AWS with ALB and Auto Scaling.svg'
  ],
  'Automated NodeJS Application Deployment': ['Automated NodeJS Application Deployment.png'],
  'Dockerizing a Flask Application and Pushing to Docker Hub': [
    'Dockerizing a Flask Application and Pushing to Docker Hub.png',
    'Dockerizing a Flask Application and Pushing to Docker Hub (2).png'
  ],
  'Automated WordPress Deployment with Ansible and Docker': ['WordPress Deployment with Ansible and Docker.png']
};

// Function to open project modal (called from HTML onclick)
function openProjectModal(title) {
  const images = projectImages[title];

  if (images) {
    modalTitle.textContent = title;
    modalImages.innerHTML = '';

    images.forEach(image => {
      const img = document.createElement('img');
      img.src = `src/${image}`;
      img.alt = `${title} - ${image}`;
      img.loading = 'lazy';
      modalImages.appendChild(img);
    });

    projectModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

// Close modal functionality
if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (projectModal) {
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      closeModal();
    }
  });
}

function closeModal() {
  projectModal.style.display = 'none';
  document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projectModal.style.display === 'flex') {
    closeModal();
  }
});
