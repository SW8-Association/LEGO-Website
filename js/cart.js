// Cart State
const listCart = document.querySelector(".listCart");
const iconCartSpan = document.querySelector("#icon-cart span");
let carts = [];

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
          <div class="removeBtn">
            <button>Remove</button>
          </div>
        </div>
      `;
        })
        .join("");
};

// Cart Actions
const addToCart = (product) => {
    const productId = product.id;
    const existingIndex = carts.findIndex(
        (item) => item.productId === productId,
    );

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
            if ((carts[itemIndex].quantity = 1)) {
                carts.values(itemIndex, 1);
            }
        }

        addCartToHTML();
        renderCartItems();
    });
}

// Initial Cart Render
addCartToHTML();
renderCartItems();

//CheckOut - Clear card items
const checkoutBtn = document.querySelector(".checkOut");

if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
        carts = [];
        addCartToHTML();
        renderCartItems();
    });
}
// App Bootstrap
document.addEventListener("DOMContentLoaded", () => {
    renderTeamMembers();
    renderHomepageProducts();
    renderProductDetailsPage();
    setupSlider();
    setupCartToggle();
});

document.addEventListener("click", (event) => {
    const addBtn = event.target.closest(".add-to-bag");
    if (!addBtn) return;

    const productCard = addBtn.closest(".product-card, .detail-card");
    if (!productCard) return;

    const productData = {
        id: Number(productCard.dataset.id),
        title: productCard.dataset.title,
        image: productCard.dataset.image,
        price: Number(productCard.dataset.price),
    };

    addToCart(productData);
});

document;

// Cart Panel Toggle
const setupCartToggle = () => {
    const iconCart = document.getElementById("icon-cart");
    const closeCartBtn = document.querySelector(".close");

    if (iconCart) {
        iconCart.addEventListener("click", (event) => {
            event.preventDefault();
            document.body.classList.add("showCart");
        });
    }

    if (closeCartBtn) {
        closeCartBtn.addEventListener("click", () => {
            document.body.classList.remove("showCart");
        });
    }
};
