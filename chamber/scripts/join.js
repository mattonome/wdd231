// Set the current timestamp in the hidden input field
document.addEventListener("DOMContentLoaded", function () {
    const timestampInput = document.getElementById("timestamp");
    if (timestampInput) {
      const now = new Date();
      timestampInput.value = now.toISOString();
    }
  
    // Open modals when clicking membership benefit links
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
  
    // Close modals when clicking the close link
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
  