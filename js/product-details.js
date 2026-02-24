// Product Details Data + Rendering
const setupProductDes = (product) =>
  `Build ${product.title} and recreate your favorite scenes with iconic details, rich colors, and display-ready pieces for collectors and fans alike.`;

const getSelectedProduct = () => {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  return products.find((product) => product.id === id) || products[0];
};

const getDetailBadges = (product) => {
  const badges = [...product.badges];
  if (product.discount > 0 && !badges.includes("Sale")) {
    badges.push("Sale");
  }
  return badges;
};

const getDetailStats = (product) => ({
  reviewCount: 120 + product.id * 17,
  pieces: 320 + product.id * 68,
  setNumber: 75000 + product.id,
  theme: product.badges.includes("Star Wars") ? "Star Wars" : "Adventure",
});

const createDetails = (product) => {
  const finalPrice = getProductFinalPrice(product).toFixed(2);
  const badges = getDetailBadges(product);
  const { reviewCount, pieces, setNumber, theme } = getDetailStats(product);
  const images = getProductImages(product);
  const mainImage = images[0] || "";

  return `
    <article
      class="detail-card"
      data-id="${product.id}"
      data-title="${product.title}"
      data-image="${mainImage}"
      data-price="${finalPrice}"
    >
      <div class="detail-media">
        <div class="detail-main-image">
          <img src="${mainImage}" alt="${product.title}">
        </div>
        <div class="detail-thumbs">
          ${images
            .map(
              (image, index) =>
                `<img class="${index === 0 ? "is-active" : ""}" src="${image}" data-image="${image}" alt="${product.title} preview ${index + 1}">`,
            )
            .join("")}
        </div>
      </div>

      <div class="detail-info">
        <p class="detail-kicker">LIMITED COLLECTION</p>
        <h1 class="detail-title">${product.title}</h1>
        <div class="badges">${badges.map((badge) => `<span class="badge-item">${badge}</span>`).join("")}</div>
        <p class="detail-rating">
          ${renderStars(product.rating)} <span>${product.rating}/5 (${reviewCount} reviews)</span>
        </p>
        <p class="detail-price">
          $${finalPrice}
          ${
            product.discount > 0
              ? `<span class="discount">$${product.price.toFixed(2)}</span>`
              : ""
          }
        </p>
        <p class="detail-description">${setupProductDes(product)}</p>
        <ul class="detail-meta">
          <li>Set Number: ${setNumber}</li>
          <li>Pieces: ${pieces}</li>
          <li>Age Recommendation: 9+</li>
          <li>Theme: ${theme}</li>
        </ul>

        <button class="add-to-bag">Add to Bag</button>
        <a href="inquiry-form.html?id=${product.id}" class="send-inquiry-btn ">
            Send Inquiry
          </a>
        
        <a class="back-link" href="/sale.html">Back to All Products</a>
      </div>
    </article>
  `;
};

const renderProductDetailsPage = () => {
  const detailsContainer = document.getElementById("product-details");
  if (!detailsContainer) return;

  const selectedProduct = getSelectedProduct();
  detailsContainer.innerHTML = createDetails(selectedProduct);
  setupDetailGallery();
};

// Product Details Gallery Interactions
const setupDetailGallery = () => {
  const detailCard = document.querySelector(".detail-card");
  if (!detailCard) return;

  const mainImage = detailCard.querySelector(".detail-main-image img");
  const thumbnails = detailCard.querySelectorAll(".detail-thumbs img");
  if (!mainImage || thumbnails.length === 0) return;

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      const nextImage = thumbnail.dataset.image || thumbnail.src;
      if (!nextImage) return;

      mainImage.src = nextImage;
      thumbnails.forEach((item) => item.classList.remove("is-active"));
      thumbnail.classList.add("is-active");
    });
  });
};
