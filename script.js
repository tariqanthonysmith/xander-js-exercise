import { data } from "./data";

const searchInput = getElement("#search");
const btnContainer = getElement("#btn-container");
const productContainer = getElement("#productslist-container");

console.log(searchInput);
console.log(btnContainer);
console.log(productContainer);

function getElement(identifier) {
  const el = document.querySelector(identifier);

  if (!el) {
    throw new Error("Could not find the element specified.");
  } else {
    return el;
  }
}

function displayProducts(products) {
  const productList = products
    .map((product) => {
      const { title, price, brand, rating, thumbnail } = product;
      return `
    <div class='product-wrapper'>
      <div class='rating'>
        <p>Rating: ${rating}</p>
      </div>
      <div class='product-info'>
        <div class='product-img'>
          <img src='${thumbnail}' alt='${title}'/>
        </div>
        <div class='product-detail'>
          <h2>${title}</h2>
          <p>${brand}</p>
          <p>$${price}.00</p>
        </div>
      </div>
    </div>
  `;
    })
    .join("");

  productContainer.innerHTML = productList;
}

function createBtn(category) {}

function filterProducts(value) {}

function displayCategories(products) {}

function parseCategories(products) {}

function init() {
  displayProducts(data.products);
}

init();