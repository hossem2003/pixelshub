// Pixels Platform - Main JavaScript

// Theme Toggle
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Update icon
  const icon = document.querySelector('.theme-icon');
  if (icon) {
    icon.className = newTheme === 'dark' ? 'fas fa-sun theme-icon' : 'fas fa-moon theme-icon';
  }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  const icon = document.querySelector('.theme-icon');
  if (icon) {
    icon.className = savedTheme === 'dark' ? 'fas fa-sun theme-icon' : 'fas fa-moon theme-icon';
  }
});

// Search functionality
const searchInputs = document.querySelectorAll('.search-bar input');
searchInputs.forEach(input => {
  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    console.log('Searching for:', query);
    // Implement search logic here
  });
});

// User menu dropdown
const userAvatar = document.querySelector('.user-avatar');
const userDropdown = document.querySelector('.user-dropdown');

if (userAvatar) {
  userAvatar.addEventListener('click', (e) => {
    e.stopPropagation();
    if (userDropdown) {
      userDropdown.classList.toggle('show');
    }
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (userDropdown && !userDropdown.contains(e.target) && !userAvatar.contains(e.target)) {
    userDropdown.classList.remove('show');
  }
});

// Logout functionality
function logout() {
  if (confirm('Are you sure you want to logout?')) {
    localStorage.removeItem('user');
    localStorage.removeItem('theme');
    window.location.href = 'login.html';
  }
}

// Card click tracking
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', (e) => {
    // Track card interactions
    console.log('Card clicked');
  });
});

// Subject card tracking
const subjectCards = document.querySelectorAll('.subject-card');
subjectCards.forEach(card => {
  card.addEventListener('click', (e) => {
    console.log('Subject selected');
  });
});

// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.querySelector('.nav');
  if (nav) {
    nav.classList.toggle('mobile-open');
  }
}
