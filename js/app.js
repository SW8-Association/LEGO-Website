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
