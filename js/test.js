import { getAllProductData } from "./api.js";

function renderProducts(products) {
  const container = document.getElementById("products");

  container.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");

    const title = document.createElement("h2");
    const img = document.createElement("img");
    card.textContent = product.img;
    title.textContent = product.title;

    card.appendChild(title);

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const products = await getAllProductData();
  renderProducts(products);
});
