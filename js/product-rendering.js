// Product List Rendering
const renderProducts = (list, container) => {
    if (!container) return;
    container.innerHTML = "";

    list.forEach((product) => {
        const finalPrice = getProductFinalPrice(product).toFixed(2);
        const primaryImage = getPrimaryProductImage(product);

        const card = document.createElement("div");
        card.className = "product-card";
        card.dataset.id = product.id;
        card.dataset.title = product.title;
        card.dataset.image = primaryImage;
        card.dataset.price = finalPrice;
        card.innerHTML = `
      <a class="product-image-link" href="/details.html?id=${product.id}">
        <img src="${primaryImage}" alt="${product.title}">
      </a>
      <div class="badges">
        ${product.badges.map((badge) => `<span class="badge-item">${badge}</span>`).join("")}
        ${
            product.discount > 0 && !product.badges.includes("Sale")
                ? `<span class="badge-item">Sale</span>`
                : ""
        }
      </div>
      <a class="product-title-link" href="/details.html?id=${product.id}">
        <h3>${product.title}</h3>
      </a>
      <div class="price">
        $${finalPrice}
        ${
            product.discount > 0
                ? `<span class="discount">$${product.price.toFixed(2)}</span>`
                : ""
        }
      </div>
      <div class="stars">${renderStars(product.rating)}</div>
      <a class="details-link" href="/details.html?id=${product.id}">View Details</a>
      <button class="add-to-bag">Add to Bag</button>
    `;

        container.appendChild(card);
    });
};

// Team Section
const renderTeamMembers = () => {
    const teamContainer = document.getElementById("team");
    if (!teamContainer) return;
    teamContainer.innerHTML = team
        .map(
            (member) => `
        <section class="card ${member.color}">
          <div class="badge">${member.badge}</div>
          <div class="studs-top">
            <div class="stud"></div>
            <div class="stud"></div>
            <div class="stud"></div>
          </div>
          <div class="avatar">
            <img src="${member.img}" alt="${member.name}">
          </div>
          <div class="name">${member.name}</div>
          <div class="role">${member.role}</div>
          <div class="desc">${member.desc}</div>
        </section>
      `,
        )
        .join("");
};

// Homepage Rendering
const renderHomepageProducts = () => {
    const promoGrid = document.getElementById("promotion-products");
    if (promoGrid) {
        const top4Promos = [...products]
            .filter((product) => product.discount > 0)
            .sort((a, b) => b.discount - a.discount)
            .slice(0, 4);
        renderProducts(top4Promos, promoGrid);
    }

    const allProductsGrid = document.getElementById("all-products");
    if (allProductsGrid) {
        renderProducts(products, allProductsGrid);
    }
};
