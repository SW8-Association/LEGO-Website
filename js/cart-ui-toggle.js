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
