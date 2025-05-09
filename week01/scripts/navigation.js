// navigation.js
// (Placeholder) Toggle responsive navigation menu

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navUl = document.querySelector("nav ul");
  
    if (menuToggle && navUl) {
      menuToggle.addEventListener("click", () => {
        navUl.classList.toggle("open");
        // you can add ARIA attribute toggles here as needed
      });
    }
  });
  