document.addEventListener("DOMContentLoaded", function () {
  // Set timestamp
  const timestampInput = document.getElementById("timestamp");
  if (timestampInput) {
    const now = new Date();
    timestampInput.value = now.toISOString();
  }

  // === Wayfinder Function ===
  function highlightCurrentPage() {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
      const linkPath = link.getAttribute("href").split("/").pop();
      if (linkPath === currentPath) {
        link.classList.add("active");
      }
    });
  }

  highlightCurrentPage(); // ✅ CALL THE FUNCTION so it activates on load

  // === Menu Toggle ===
  const toggleBtn = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      toggleBtn.textContent = navLinks.classList.contains("show") ? "X" : "☰";
    });
  }

  // === Open Modals ===
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

  // === Close Modals ===
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
