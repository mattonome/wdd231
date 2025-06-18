import { fashion } from "../data/project.mjs";

document.addEventListener("DOMContentLoaded", () => {
  loadAttractions();
  updateFooterDates();
  highlightCurrentPage();
  setupMenuToggle();
});

function loadAttractions() {
  const cardsContainer = document.getElementById("cards");
  if (!cardsContainer || !fashion) return;

  fashion.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${item.name}</h2>
      <figure>
        <img src="${item.photo_url}" alt="${item.name}" loading="lazy">
      </figure>
      <address>${item.address}</address>
      <p>${item.description}</p>
      <a href="checkout.html?id=${item.id}" class="buy-btn">Buy now</a>
    `;
    cardsContainer.appendChild(card);
  });
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
