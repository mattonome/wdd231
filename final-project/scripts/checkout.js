import { fashion } from "../data/project.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const product = fashion.find(item => item.id === id);

  if (!product) {
    document.getElementById("checkout-product").innerHTML = "<p>Product not found.</p>";
    return;
  }

  document.getElementById("checkout-name").textContent = product.name;
  document.getElementById("checkout-image").src = product.photo_url;
  document.getElementById("checkout-image").alt = product.name;
  document.getElementById("checkout-price").textContent = `${product.address}`;
  document.getElementById("checkout-description").textContent = product.description;

  document.getElementById("goBack").addEventListener("click", () => {
    history.back();
  });
});
