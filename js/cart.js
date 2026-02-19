// Cart State + Persistence
const listCart = document.querySelector(".listCart");
const iconCartSpan = document.querySelector("#icon-cart span");
const CART_STORAGE_KEY = "lego_cart_items";
let carts = [];

const saveCartToStorage = () => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(carts));
};

const loadCartFromStorage = () => {
  const savedCart = localStorage.getItem(CART_STORAGE_KEY);
  if (!savedCart) return;

  try {
    const parsedCart = JSON.parse(savedCart);
    if (Array.isArray(parsedCart)) {
      carts = parsedCart;
    }
  } catch (error) {
    carts = [];
  }
};

const addCartToHTML = () => {
  const totalQuantity = carts.reduce((sum, item) => sum + item.quantity, 0);
  if (iconCartSpan) {
    iconCartSpan.textContent = `(${totalQuantity})`;
  }
};

const renderCartItems = () => {
  if (!listCart) return;

  if (carts.length === 0) {
    listCart.innerHTML =
      '<p style="text-align:center;font-size:10px;">Your cart is empty.</p>';
    return;
  }

  listCart.innerHTML = carts
    .map((item) => {
      const total = (item.price * item.quantity).toFixed(2);
      return `
        <div class="item" data-id="${item.productId}">
          <img src="${item.image}" alt="${item.title}">
          <div>
            <div class="name">${item.title}</div>
            <div class="totalPrice">$${total}</div>
          </div>
          <div class="quantity">
            <span class="minus">-</span>
            <span>${item.quantity}</span>
            <span class="plus">+</span>
          </div>
        </div>
      `;
    })
    .join("");
};

// Cart Actions
const addToCart = (product) => {
  const productId = product.id;
  const existingIndex = carts.findIndex((item) => item.productId === productId);

  if (existingIndex < 0) {
    carts.push({
      productId,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: 1,
    });
  } else {
    carts[existingIndex].quantity += 1;
  }

  addCartToHTML();
  renderCartItems();
  saveCartToStorage();
};

if (listCart) {
  listCart.addEventListener("click", (event) => {
    const item = event.target.closest(".item");
    if (!item) return;

    const itemId = Number(item.dataset.id);
    const itemIndex = carts.findIndex(
      (cartItem) => cartItem.productId === itemId,
    );
    if (itemIndex < 0) return;

    if (event.target.classList.contains("plus")) {
      carts[itemIndex].quantity += 1;
    }

    if (event.target.classList.contains("minus")) {
      carts[itemIndex].quantity -= 1;
      if (carts[itemIndex].quantity <= 0) {
        carts.splice(itemIndex, 1);
      }
    }

    addCartToHTML();
    renderCartItems();
    saveCartToStorage();
  });
}

// Initial Cart Render
loadCartFromStorage();
addCartToHTML();
renderCartItems();
