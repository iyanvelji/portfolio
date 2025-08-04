/*******************************************************
 * script.js
 * Handles tab navigation and advanced features like 
 * toggling dark mode.
 ******************************************************/

/* ----------------------------
   TAB NAVIGATION
---------------------------- */
// const tabs = document.querySelectorAll('nav ul li a');
// const tabContents = document.querySelectorAll('.tab-content');

// tabs.forEach(tab => {
//   tab.addEventListener('click', function(e) {
//     e.preventDefault();

//     // Remove active class from all tabs
//     tabs.forEach(t => t.classList.remove('active'));
//     // Hide all tab contents
//     tabContents.forEach(content => content.classList.remove('active'));

//     // Add active class to clicked tab and show corresponding content
//     this.classList.add('active');
//     const tabId = this.getAttribute('data-tab');
//     document.getElementById(tabId).classList.add('active');
//   });
// });

// document.querySelectorAll('.skill-card').forEach(card => {
//     card.addEventListener('click', () => {
//       const modal = document.getElementById('skill-modal');
//       document.getElementById('modal-title').textContent = card.dataset.title;
//       document.getElementById('modal-desc').textContent = card.dataset.desc;
//       modal.classList.add('show');
//     });
//   });
//   document.querySelector('#skill-modal .close').addEventListener('click', () => {
//     document.getElementById('skill-modal').classList.remove('show');
//   });

//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });


// Get the modal
var modal = document.getElementById("skillModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get all skill cards
var skillCards = document.getElementsByClassName("skill-card");

// Add click event to each skill card
for (var i = 0; i < skillCards.length; i++) {
  skillCards[i].onclick = function() {
    var title = this.getAttribute("data-title");
    var desc = this.getAttribute("data-desc");
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc").innerText = desc;
    modal.style.display = "block";
  }
}

// Close the modal when clicking on <span> (x)
span.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when clicking anywhere outside of the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}