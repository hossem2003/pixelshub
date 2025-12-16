// Settings Page JavaScript

function showSection(sectionName) {
  // Update active nav item
  document.querySelectorAll('.settings-nav-item').forEach(item => {
    item.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Show selected section
  document.querySelectorAll('.settings-section').forEach(section => {
    section.classList.remove('active');
  });
  
  const targetSection = document.getElementById(`${sectionName}-section`);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  
  // Update URL hash
  window.location.hash = sectionName;
  
  // Prevent default anchor behavior
  event.preventDefault();
}

// Handle initial section from URL hash
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.substring(1);
  
  if (hash) {
    const targetNav = document.querySelector(`a[href="#${hash}"]`);
    if (targetNav) {
      targetNav.click();
    }
  }
  
  // Font size buttons
  const fontSizeBtns = document.querySelectorAll('.font-size-btn');
  fontSizeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      fontSizeBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const size = this.getAttribute('data-size');
      document.body.setAttribute('data-font-size', size);
      console.log(`Font size changed to: ${size}`);
    });
  });
  
  // Save buttons
  const saveButtons = document.querySelectorAll('.btn-primary');
  saveButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      // Simulate save
      const originalText = this.textContent;
      this.textContent = '✓ Saved!';
      this.style.background = 'var(--added)';
      
      setTimeout(() => {
        this.textContent = originalText;
        this.style.background = '';
      }, 2000);
    });
  });
  
  // Theme selection
  const themeRadios = document.querySelectorAll('input[name="theme"]');
  themeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      const theme = this.value;
      console.log(`Theme changed to: ${theme}`);
      
      if (theme === 'dark') {
        document.body.classList.add('dark-theme');
      } else if (theme === 'light') {
        document.body.classList.remove('dark-theme');
      } else {
        // Auto theme based on system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.classList.toggle('dark-theme', prefersDark);
      }
    });
  });
});
