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

