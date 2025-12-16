// Notifications Page JavaScript

function filterNotifications(type) {
  // Update active tab
  document.querySelectorAll('.notification-tabs .tab').forEach(tab => {
    tab.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Filter notifications
  const notifications = document.querySelectorAll('.notification-item');
  
  notifications.forEach(notification => {
    if (type === 'all') {
      notification.style.display = 'flex';
    } else if (type === 'unread') {
      notification.style.display = notification.classList.contains('unread') ? 'flex' : 'none';
    } else {
      const notifType = notification.getAttribute('data-type');
      notification.style.display = notifType === type ? 'flex' : 'none';
    }
  });
  
  // Show/hide empty state
  const visibleNotifications = Array.from(notifications).filter(n => n.style.display !== 'none');
  const emptyState = document.querySelector('.empty-state');
  
  if (visibleNotifications.length === 0) {
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';
  }
}

function markAllRead() {
  const unreadNotifications = document.querySelectorAll('.notification-item.unread');
  
  unreadNotifications.forEach(notification => {
    notification.classList.remove('unread');
    const status = notification.querySelector('.notification-status');
    if (status) {
      status.remove();
    }
  });
  
  // Update badge count
  const badge = document.querySelector('.notification-badge');
  if (badge) {
    badge.textContent = '0';
    badge.style.display = 'none';
  }
  
  // Update tab counts
  const allTab = document.querySelector('.notification-tabs .tab:first-child');
  const unreadTab = document.querySelector('.notification-tabs .tab:nth-child(2)');
  
  const totalCount = document.querySelectorAll('.notification-item').length;
  allTab.textContent = `All (${totalCount})`;
  unreadTab.textContent = 'Unread (0)';
  
  console.log('All notifications marked as read');
}

function openSettings() {
  window.location.href = 'settings.html';
}

// Mark individual notification as read on click
document.addEventListener('DOMContentLoaded', () => {
  const notifications = document.querySelectorAll('.notification-item');
  
  notifications.forEach(notification => {
    notification.addEventListener('click', function(e) {
      // Don't mark as read if clicking a button
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        return;
      }
      
      if (this.classList.contains('unread')) {
        this.classList.remove('unread');
        const status = this.querySelector('.notification-status');
        if (status) {
          status.remove();
        }
        
        // Update badge count
        const badge = document.querySelector('.notification-badge');
        if (badge) {
          const currentCount = parseInt(badge.textContent);
          const newCount = currentCount - 1;
          badge.textContent = newCount;
          
          if (newCount === 0) {
            badge.style.display = 'none';
          }
        }
      }
    });
  });
});
