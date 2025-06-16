import { attractions } from "../data/places.mjs";

document.addEventListener("DOMContentLoaded", () => {
  loadAttractions();
  showVisitMessage();
  updateFooterDates();
  setupMenuToggle();
  setupModals();
  highlightCurrentPage(); // 👈 Call the wayfinder here
});

function loadAttractions() {
  const cardsContainer = document.getElementById("cards");
  attractions.forEach(place => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${place.name}</h2>
      <figure>
        <img src="${place.photo_url}" alt="${place.name}" loading="lazy" width="300" height="200">
      </figure>
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

  if (!messageEl) return;

  if (!lastVisit) {
    messageEl.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const daysPassed = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    messageEl.textContent = daysPassed < 1
      ? "Back so soon! Awesome!"
      : `You last visited ${daysPassed} day${daysPassed === 1 ? "" : "s"} ago.`;
  }

  localStorage.setItem("lastVisit", now);
}

function updateFooterDates() {
  const yearEl = document.getElementById("copyright-year");
  const modifiedEl = document.getElementById("last-modified");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  if (modifiedEl) {
    modifiedEl.textContent = new Date(document.lastModified).toLocaleDateString();
  }
}

// === Wayfinder Function ===
function highlightCurrentPage() {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
}

function setupMenuToggle() {
  const toggleBtn = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      toggleBtn.textContent = navLinks.classList.contains("show") ? "X" : "☰";
    });
  }
}

function setupModals() {
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
}
