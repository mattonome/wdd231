import { attractions } from "../data/places.mjs";

document.addEventListener("DOMContentLoaded", () => {
  loadAttractions();
  showVisitMessage();
});

function loadAttractions() {
  const cardsContainer = document.getElementById("cards");
  attractions.forEach(place => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${place.name}</h2>
      <figure><img src="${place.photo_url}" alt="${place.name}"></figure>
      <address>${place.address}</address>
      <p>${place.description}</p>
      <button>Learn more</button>
    `;
    cardsContainer.appendChild(card);
  });
}

function showVisitMessage() {
  const messageEl = document.getElementById("visitMessage");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
    messageEl.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const daysPassed = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysPassed < 1) {
      messageEl.textContent = "Back so soon! Awesome!";
    } else {
      messageEl.textContent = `You last visited ${daysPassed} day${daysPassed === 1 ? "" : "s"} ago.`;
    }
  }

  localStorage.setItem("lastVisit", now);
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
  