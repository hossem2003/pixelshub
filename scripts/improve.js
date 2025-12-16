// Improve Page JavaScript

let currentStep = 1;

function goToStep(step) {
  // Hide all steps
  document.querySelectorAll('.improve-step-content').forEach(el => {
    el.style.display = 'none';
  });
  
  // Show target step
  document.getElementById('step' + step).style.display = 'block';
  
  // Update step indicators
  document.querySelectorAll('.step').forEach((el, index) => {
    if (index < step) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
  
  currentStep = step;
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function togglePreview() {
  const editor = document.querySelector('.editor-panel');
  const preview = document.getElementById('previewPanel');
  const content = document.getElementById('contentEditor').value;
  
  if (preview.style.display === 'none') {
    preview.style.display = 'flex';
    document.getElementById('previewContent').innerHTML = 
      '<p><em>Preview would render your Markdown here...</em></p><p>' + 
      content.split('\n').slice(0, 5).join('<br>') + '...</p>';
  } else {
    preview.style.display = 'none';
  }
}

function submitVersion() {
  if (confirm('Submit your version 4.3? This will create a new version for community review.')) {
    alert('🎉 Success! Version 4.3 submitted!\n\nYour contribution will be reviewed by the community. You\'ll earn community score based on the quality of your improvements.');
    window.location.href = 'course.html';
  }
}

// Toolbar button handlers
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toolbar-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const editor = document.getElementById('contentEditor');
      if (editor) {
        // Simple text insertion (in real app, would handle selection)
        console.log('Format button clicked:', btn.title);
      }
    });
  });
  
  // Auto-save draft every 30 seconds
  setInterval(() => {
    const content = document.getElementById('contentEditor')?.value;
    if (content) {
      localStorage.setItem('improveDraft', content);
      console.log('Draft auto-saved');
    }
  }, 30000);
  
  // Load draft on page load
  const draft = localStorage.getItem('improveDraft');
  if (draft && document.getElementById('contentEditor')) {
    if (confirm('You have an unsaved draft. Would you like to restore it?')) {
      document.getElementById('contentEditor').value = draft;
    }
  }
});
