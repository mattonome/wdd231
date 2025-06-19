import { ladies } from "../data/ladies.mjs";

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Script loaded");

  const params = new URLSearchParams(window.location.search);
  const idParam = params.get("id");
  const itemId = idParam ? parseInt(idParam.trim()) : null;

  console.log("Loaded ID:", itemId);

  if (!itemId || isNaN(itemId)) {
    document.getElementById("checkout-card").innerHTML = "<p>Invalid or missing product ID.</p>";
    return;
  }

  const item = ladies.find(i => i.id === itemId);
  console.log("Matching item:", item);

  if (!item) {
    document.getElementById("checkout-card").innerHTML = "<p>Item not found.</p>";
    return;
  }

  document.getElementById("checkout-name").textContent = item.name;
  document.getElementById("checkout-image").src = item.photo_url;
  document.getElementById("checkout-image").alt = item.name;
  document.getElementById("checkout-price").textContent = item.address;
  document.getElementById("checkout-description").textContent = item.description;

  // Go back
  const goBackBtn = document.getElementById("goBack");
  goBackBtn?.addEventListener("click", () => history.back());

  // Confirm purchase
  const confirmBtn = document.getElementById("confirmPurchase");
  confirmBtn?.addEventListener("click", () => {
    const qty = document.getElementById("quantity").value;
    alert(`✅ You selected "${item.name}" x ${qty} - ${item.address}`);
  });
});
