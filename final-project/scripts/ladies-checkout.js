import { ladies } from "../data/ladies.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const itemId = parseInt(params.get("id"));
  const item = ladies.find(i => i.id === itemId);

  if (item) {
    document.getElementById("checkout-name").textContent = item.name;
    document.getElementById("checkout-image").src = item.photo_url;
    document.getElementById("checkout-image").alt = item.name;
    document.getElementById("checkout-price").textContent = item.address;
    document.getElementById("checkout-description").textContent = item.description;
  } else {
    document.getElementById("checkout-card").innerHTML = "<p>Item not found.</p>";
  }
});
