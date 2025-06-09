document.addEventListener("DOMContentLoaded", function () {
    // Set timestamp
    const timestampInput = document.getElementById("timestamp");
    if (timestampInput) {
      const now = new Date();
      timestampInput.value = now.toISOString();
    }
  
    // Menu toggle
    const toggleBtn = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
  
    if (toggleBtn && navLinks) {
      toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show"); // Use 'show' or 'active', but stay consistent
        toggleBtn.textContent = navLinks.classList.contains("show") ? "X" : "☰";
      });
    }
  
    // Open modals
    document.querySelectorAll('.membership-cards a').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const modalId = this.getAttribute('href');
        const modal = document.querySelector(modalId);
        if (modal) {
          modal.style.display = 'block';
        }
      });
    });
  
    // Close modals
    document.querySelectorAll('.modal a').forEach(closeLink => {
      closeLink.addEventListener('click', function (e) {
        e.preventDefault();
        const modal = this.closest('.modal');
        if (modal) {
          modal.style.display = 'none';
        }
      });
    });
  });
  