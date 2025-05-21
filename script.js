/*******************************************************
 * script.js
 * Handles tab navigation and advanced features like 
 * toggling dark mode.
 ******************************************************/

/* ----------------------------
   TAB NAVIGATION
---------------------------- */
const tabs = document.querySelectorAll('nav ul li a');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', function(e) {
    e.preventDefault();

    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Hide all tab contents
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to clicked tab and show corresponding content
    this.classList.add('active');
    const tabId = this.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});

document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', () => {
      const modal = document.getElementById('skill-modal');
      document.getElementById('modal-title').textContent = card.dataset.title;
      document.getElementById('modal-desc').textContent = card.dataset.desc;
      modal.classList.add('show');
    });
  });
  document.querySelector('#skill-modal .close').addEventListener('click', () => {
    document.getElementById('skill-modal').classList.remove('show');
  });
