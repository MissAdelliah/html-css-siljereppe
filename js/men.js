import { getAllProductData } from "./api.js";

function renderProducts(products) {
  const container = document.getElementById("products");

  container.innerHTML = "";
  products.forEach((product) => {
    // Container for products
    const productContainer = document.createElement("div");
    productContainer.classList.add("promo__items");
    // Image of jacket
    const jacketLink = document.createElement("a");
    jacketLink.href = "product.html";
    const jacketImage = document.createElement("img");
    jacketImage.classList.add("product--img");
    jacketImage.src = product.image?.url || "./images/default-jacket.jpg";
    jacketImage.alt = product.image?.alt || product.title;

    jacketLink.appendChild(jacketImage);
    // Text container for products
    const productTextContainer = document.createElement("div");
    productTextContainer.classList.add("products__items--text");
    // Product title
    const productHeader = document.createElement("h2");
    productHeader.classList.add("product__items--header");
    productHeader.textContent = product.title;
    // Product description
    const productDescription = document.createElement("p");
    productDescription.classList.add("product__items--description");
    productDescription.textContent = product.description;
    // Price
    const priceProduct = document.createElement("h3");
    priceProduct.classList.add("product__items--price");
    priceProduct.textContent = product.price;

    const buttonWrap = document.createElement("div");
    buttonWrap.classList.add("product__items--buttons");

    // Button for size choice
    const buttonChooseSize = document.createElement("button");
    buttonChooseSize.classList.add("size");
    buttonChooseSize.textContent = "Choose size >";
    // Button for favorites
    const heartLink = document.createElement("a");
    heartLink.href = "./favorite.html";
    const buttonHeart = document.createElement("button");
    buttonHeart.classList.add("heart");
    buttonHeart.innerHTML = '<i class="fa-solid fa-heart"></i>';
    heartLink.appendChild(buttonHeart);
    // Button for cart
    const cartLink = document.createElement("a");
    cartLink.href = "./cart.html";
    const buttonCart = document.createElement("button");
    buttonCart.classList.add("cart");
    buttonCart.innerHTML = '<i class="fa-solid fa-shopping-cart"></i>';
    cartLink.appendChild(buttonCart);

    // Button group
    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("product__items--buttons");

    buttonGroup.appendChild(buttonChooseSize);
    buttonGroup.appendChild(heartLink);
    buttonGroup.appendChild(cartLink);

    productTextContainer.appendChild(productHeader);
    productTextContainer.appendChild(productDescription);
    productTextContainer.appendChild(priceProduct);
    productTextContainer.appendChild(buttonGroup);

    productContainer.appendChild(jacketLink);
    productContainer.appendChild(productTextContainer);

    container.appendChild(productContainer);
    //     </div>
    //   </div>
    // </div> */}
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const products = await getAllProductData();

  // Male gender
  // const genderToShow = "Male";

  const filteredProducts = products.filter(
    (product) => product.gender === "Male" && product.image?.url
  );

  renderProducts(filteredProducts);
});
