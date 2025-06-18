import { ladies } from "../data/ladies.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementById("cards");

  ladies.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${item.name}</h2>
      <figure>
        <img src="${item.photo_url}" alt="${item.name}" loading="lazy">
      </figure>
      <address>${item.address}</address>
      <p>${item.description}</p>
      <a href="ladies-checkout.html?id=${item.id}">
        <button class="buy-btn">Buy Now</button>
      </a>
    `;

    cardsContainer.appendChild(card);
  });
});
