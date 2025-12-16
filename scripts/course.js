// Course Page Specific JavaScript

// Toggle TOC Chapter
function toggleChapter(element) {
  const tocItem = element.parentElement;
  const sections = tocItem.querySelector('.toc-sections');
  const icon = element.querySelector('.toc-icon');
  
  if (sections.style.display === 'none' || !sections.style.display) {
    sections.style.display = 'flex';
    icon.textContent = '▼';
  } else {
    sections.style.display = 'none';
    icon.textContent = '▶';
  }
}

// TOC Link Navigation
document.addEventListener('DOMContentLoaded', () => {
  const tocLinks = document.querySelectorAll('.toc-link');
  
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all links
      tocLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      link.classList.add('active');
      
      // Scroll to content (if sections exist)
      console.log('Navigating to:', link.textContent);
    });
  });
});

// Smooth scroll for navigation buttons
const navButtons = document.querySelectorAll('.nav-buttons .btn');
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Track reading progress
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  
  // Could display a progress bar here
  if (scrollPercentage > 90) {
    console.log('User near end of content');
  }
  
  lastScrollTop = scrollTop;
});
