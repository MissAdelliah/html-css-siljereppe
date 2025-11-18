import { getAllProductData } from "./api.js";

function renderProducts(products) {
  const container = document.getElementById("products");

  container.innerHTML = "";
  products.forEach((product) => {
    // // White container
    // const jacketContainer = document.createElement("div");
    // jacketContainer.classList.add("promo__container");
    // // Main Jacket Image
    // const mainJacket = document.createElement("img");
    // mainJacket.src = product.image?.url || "./images/default-jacket.jpg";
    // mainJacket.alt = product.image?.alt || product.title;
    // // Text container for Main Jacket
    // const textContainer = document.createElement("div");
    // textContainer.classList.add("home-product-info");
    // // Main Jacket name
    // const promoHeader = document.createElement("h3");
    // promoHeader.classList.add("promo--header");
    // promoHeader.textContent = product.title;
    // // Description of Main Jacket
    // const promoDescription = document.createElement("p");
    // promoDescription.classList.add("promo--description");
    // promoDescription.textContent = product.description;
    // // Price of Main Jacket
    // const price = document.createElement("p");
    // price.classList.add("price");
    // price.textContent = product.price;
    // // Contains buttons
    // const promoItemsButtons = document.createElement("div");
    // promoItemsButtons.classList.add("promo__items--buttons");
    // // Button for size choice
    // const buttonChooseSize = document.createElement("button");
    // buttonChooseSize.classList.add("size");
    // buttonChooseSize.textContent = "Choose size >";
    // // Button for favorites
    // const heartLink = document.createElement("a");
    // heartLink.href = "./favorite.html";
    // const buttonHeart = document.createElement("button");
    // buttonHeart.classList.add("heart");
    // buttonHeart.innerHTML = '<i class="fa-solid fa-heart"></i>';
    // // Button for cart
    // const cartLink = document.createElement("a");
    // cartLink.href = "./cart.html";
    // const buttonCart = document.createElement("button");
    // buttonCart.classList.add("cart");
    // buttonCart.innerHTML = '<i class="fa-solid fa-shopping-cart"></i>';
    // cartLink.appendChild(buttonCart);
    // // Button group
    // promoItemsButtons.appendChild(buttonChooseSize);
    // promoItemsButtons.appendChild(buttonHeart);
    // promoItemsButtons.appendChild(cartLink);
    // // Product text group
    // textContainer.appendChild(promoHeader);
    // textContainer.appendChild(promoDescription);
    // textContainer.appendChild(price);
    // textContainer.appendChild(promoItemsButtons);
    // // Everything toghether
    // jacketContainer.appendChild(mainJacket);
    // jacketContainer.appendChild(textContainer);
    // // Append to main container
    // container.appendChild(jacketContainer);
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

{
  /* <div class="products__items"> */
}
//   <a href="product.html"><img class="product--img" src="./images/mainjacket.jpg" id="product picture"></a>
//   <div class="products__items--text">
//     <h2 class="product__items--header">Deep Moss – 30,000mm Water-Resistant Jacket</h2>
//     <p class="product__items--description">Built with a 3-layer Gore-Tex® shell for ultimate breathability and waterproof protection. Stay dry, stay moving — no matter the storm.</p>
//     <h3 class="product_items--price">£ 250</h3>
//     <div class="product__items--buttons">
//       <a href="./product.html"><button class="size">Choose size ></button></a>
//       <button class="heart"><i class="fa-solid fa-heart"></i></button>
//       <a href="./cart.html"><button class="cart"><i class="fa-solid fa-shopping-cart"></i></button></a>
//     </div>
//   </div>
// </div> */}
