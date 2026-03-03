// ==============================
// Product Data
// ==============================
// List Products
const products = [
    {
        id: 1,
        title: "The Going Merry Pirate Ship",
        price: 139.99,
        discount: 0.15,
        rating: 5,
        badges: ["Bestseller"],
        image: [
            "https://www.lego.com/cdn/cs/set/assets/blt25bc5b8dc7d77c0b/75639_Prod_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt30fa6e9129243b43/75639_WEB_SEC01_NOBG_en-gb.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
            "https://www.lego.com/cdn/cs/set/assets/blta3f15e204194d42c/75639_WEB_SEC04_NOBG_en-gb.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
            "https://www.lego.com/cdn/cs/set/assets/bltdd65e0f57bfbc6a3/75639_WEB_Lineup_NOBG_en-gb.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
        ],
    },
    {
        id: 2,
        title: "The Baratie Floating Restaurant",
        price: 329.99,
        discount: 0.1,
        rating: 4.5,
        badges: ["Sale"],
        image: [
            "https://www.lego.com/cdn/cs/set/assets/bltdee182f48a19a789/75640_Prod_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blte52b2e411113d89e/75640_WEB_SEC02_NOBG_en-gb.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
            "https://www.lego.com/cdn/cs/set/assets/blt290d0d980dbaff66/75640_WEB_SEC03_NOBG_en-gb.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
            "https://www.lego.com/cdn/cs/set/assets/blt53fed3db17debf2e/75640_Lifestyle_Build_08_en-gb.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
        ],
    },
    {
        id: 3,
        title: "Buggy the Clown's Circus Tent",
        price: 54.99,
        discount: 0.25,
        rating: 4.5,
        badges: ["Sale"],
        image: [
            "https://www.lego.com/cdn/cs/set/assets/blt9d8ff1ff0fe385fb/75637_Prod_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt3327f2443360a8d4/75637_WEB_SEC01_NOBG_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt4e327d91b2d9072d/75637_WEB_SEC03_NOBG_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt127b350ba09fb420/75637_WEB_SEC02_NOBG_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
        ],
    },
    {
        id: 4,
        title: "Battle at Arlong Park",
        price: 79.99,
        discount: 0.2,
        rating: 4,
        badges: ["Sale"],
        image: [
            "https://www.lego.com/cdn/cs/set/assets/blt5b3417d6328c771d/75638_Prod_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/bltde531675934cbdf7/75638_WEB_PRI_NOBG_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt6f76ba45d8db0587/75638_WEB_SEC03_NOBG_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt812c997cf20347cc/75638_WEB_SEC04_NOBG_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
        ],
    },
    {
        id: 5,
        title: "Windmill Village Hut",
        price: 29.99,
        discount: 0,
        rating: 4,
        badges: [],
        image: [
            "https://www.lego.com/cdn/cs/set/assets/blt0feb85637d359729/75636_Prod_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt3aef4c13d0cb5d96/75636_WEB_SEC01_NOBG_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/bltdcd2c94be7d1c1f5/75636_WEB_SEC02_NOBG_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt310c4d43b569f24e/75636_WEB_Lineup_NOBG_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
        ],
    },
    {
        id: 6,
        title: "Buggy the Clown Figure",
        price: 39.99,
        discount: 0.05,
        rating: 4,
        badges: ["Sale"],
        image: [
            "https://www.lego.com/cdn/cs/set/assets/blt18836b965e63a1ab/40800_Prod_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt914bd479474f7ede/40800_boxprod_v39_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt7fff734f82b58871/40800_WEB_SEC01_NOBG_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt0060e4d76f581637/40800_WEB_PRI_NOBG_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
        ],
    },
    {
        id: 7,
        title: "AT-AT",
        price: 64.99,
        discount: 0.3,
        rating: 5,
        badges: ["Sale", "Star Wars"],
        image: [
            "https://www.lego.com/cdn/cs/set/assets/blt26f813f1a1f499c6/75440_Prod_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt580750d093af4ff0/75440_boxprod_v39_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt3b5985ba57e979df/75440_WEB_SEC01_NOBG_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/bltc8f4607b21d68e7a/75440_WEB_SEC02_NOBG_en-gb.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
        ],
    },
    {
        id: 8,
        title: "C-3PO",
        price: 139.99,
        discount: 0.1,
        rating: 4.5,
        badges: ["Star Wars"],
        image: [
            "https://www.lego.com/cdn/cs/set/assets/blt1d21181b67dcb8a5/75398_Prod.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/bltc6618252c9d34a94/75398_boxprod_v39_sha.jpg?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt8be5c66772fd89a5/75398_WEB_SEC01_NOBG.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt8064915baee92a1e/75398_Lifestyle_Envr_07.jpg?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
        ],
    },
    {
        id: 9,
        title: "Captain Rex Helmet",
        price: 68.99,
        discount: 0.15,
        rating: 4,
        badges: ["Star Wars"],
        image: [
            "https://www.lego.com/cdn/cs/set/assets/bltde62e4576a817dd4/75349.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt99f8a664708d9581/75349_alt1.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt29066593eb032f72/75349_alt2.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt81d144c6dacde7b1/75349_alt3.jpg?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
        ],
    },
    {
        id: 10,
        title: "X-Wing Starfighter",
        price: 239.99,
        discount: 0.4,
        rating: 5,
        badges: ["Sale", "Star Wars"],
        image: [
            "https://www.lego.com/cdn/cs/set/assets/blt3e07af4c83a87efd/75355.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt114953c776ac3457/75355_alt2.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/bltb9e5d66f3df6e0bd/75355_alt3.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt040bea87187f72fb/75355_alt4.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
        ],
    },
    {
        id: 11,
        title: "Jango Fett's Firespray-Class Starship",
        price: 299.99,
        discount: 0.25,
        rating: 4.5,
        badges: ["Sale", "Star Wars"],
        image: [
            "https://www.lego.com/cdn/cs/set/assets/blt616e72cc7801d6d0/75409_Prod.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt8b3b4821d0b9733d/75409_WEB_SEC01_NOBG.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blta08899c584bc4ec0/75409_WEB_SEC03_NOBG.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt65df3f3a1b74a055/75409_WEB_SEC02_NOBG.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
        ],
    },
    {
        id: 12,
        title: "Millennium Falcon",
        price: 849.99,
        discount: 0.35,
        rating: 5,
        badges: ["Sale", "Bestseller"],
        image: [
            "https://www.lego.com/cdn/cs/set/assets/blt3349f56c6f192e18/75192_Prod.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt3c8b8943285d6ad8/75192_alt3.jpg?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt713fe40eef84a136/75192_alt5.jpg?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
            "https://www.lego.com/cdn/cs/set/assets/blt68b37dcf8120f150/75192_alt6.jpg?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5",
        ],
    },
];

// ==============================
// Product Helpers
// ==============================
// Calculates discount price
const getProductFinalPrice = (product) =>
    Number((product.price * (1 - product.discount)).toFixed(2));

const getProductImages = (product) => {
    if (Array.isArray(product.image)) return product.image.filter(Boolean);
    return product.image ? [product.image] : [];
};

const getPrimaryProductImage = (product) => getProductImages(product)[0] || "";

// Make star icon
const renderStars = (rating) => "&#9733;".repeat(Math.floor(rating));

// ==============================
// Product List Rendering
// ==============================
// Display product into card
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

// ==============================
// Team Section
// ==============================
// Member List
const renderTeamMembers = () => {
    const teamContainer = document.getElementById("team");
    if (!teamContainer) return;

    const team = [
        {
            color: "red",
            img: "/img/Meng.png",
            name: "Chea Kimeng",
            role: "Founder & Developer",
            desc: "Builds the LEGO system and website.",
            badge: "LEVEL 10",
        },
        {
            color: "yellow",
            img: "/img/Hong.png",
            name: "Hor Menghong",
            role: "Product Manager",
            desc: "Manages LEGO sets and quality control.",
            badge: "LEVEL 8",
        },
        {
            color: "blue",
            img: "/img/Ly.png",
            name: "Te Eangly",
            role: "Designer",
            desc: "Designs LEGO visuals and brand style.",
            badge: "LEVEL 7",
        },
        {
            color: "green",
            img: "/img/Ra.png",
            name: "Oun Makara",
            role: "Marketing",
            desc: "Connects LEGO with customers.",
            badge: "LEVEL 6",
        },
        {
            color: "purple",
            img: "/img/Reaksa.png",
            name: "Hong Reaksa",
            role: "Marketing",
            desc: "Connects LEGO with customers.",
            badge: "LEVEL 5",
        },
        {
            color: "orange",
            img: "/img/Meysorng.png",
            name: "Heang Meysorng",
            role: "Marketing",
            desc: "Connects LEGO with customers.",
            badge: "LEVEL 7",
        },
    ];

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

// ==============================
// Homepage Rendering
// ==============================
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

// ==============================
// Product Details Data + Rendering
// ==============================
// Description of each products
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

// Stats Details
const getDetailStats = (product) => ({
    reviewCount: 120 + product.id * 17,
    pieces: 320 + product.id * 68,
    setPrice: 75000 + product.id,
    theme: product.badges.includes("Star Wars") ? "Star Wars" : "Adventure",
});

const createDetails = (product) => {
    const finalPrice = getProductFinalPrice(product).toFixed(2);
    const badges = getDetailBadges(product);
    const { reviewCount, pieces, setPrice, theme } = getDetailStats(product);
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
          <li>Set Prices: ${setPrice}</li>
          <li>Pieces: ${pieces}</li>
          <li>Age Recommendation: 9+</li>
          <li>Theme: ${theme}</li>
        </ul>
        <button class="add-to-bag">Add to Bag</button>
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

// ==============================
// Product Details Gallery Interactions
// ==============================
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

// ==============================
// Homepage Slider
// ==============================
// Slider Show
const setupSlider = () => {
    const slidesWrapper = document.querySelector(".slides");
    const dotsContainer = document.querySelector(".slider-dots");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    if (!slidesWrapper || !dotsContainer || !nextBtn || !prevBtn) return;

    const images = [
        "https://lego.bricksmegastore.com/cdn/shop/files/Boxing-Day-Deal_KV2_NEW-SETS_Web-DT.jpg?v=1766535525&width=1920",
        "https://lego.bricksmegastore.com/cdn/shop/files/11371_COUNTDOWN_DT.jpg?v=1767067009&width=1920",
        "https://lego.bricksmegastore.com/cdn/shop/files/21365-LoveBirds_DEC25_PreOrder_KV1_Web_Countdown-DT.jpg?v=1767060094&width=1920",
        "https://lego.bricksmegastore.com/cdn/shop/files/21064-Paris-CityofLove_NOV25_PreOrder_KV1_Web_Countdown-DT.jpg?v=1767060094&width=1920",
    ];

    const promotionLink = "sale.html";
    slidesWrapper.innerHTML = "";
    dotsContainer.innerHTML = "";

    const slides = images.map((src, index) => {
        const slide = document.createElement("div");
        slide.className = "slide";

        if (index === 0) {
            slide.innerHTML = `
        <a href="${promotionLink}" target="_blank">
          <img src="${src}" alt="Promotion banner ${index + 1}">
        </a>
      `;
        } else {
            slide.innerHTML = `<img src="${src}" alt="Promotion banner ${index + 1}">`;
        }

        return slide;
    });

    slidesWrapper.appendChild(slides[slides.length - 1].cloneNode(true));
    slides.forEach((slide) => slidesWrapper.appendChild(slide));
    slidesWrapper.appendChild(slides[0].cloneNode(true));

    images.forEach(() => {
        const dot = document.createElement("span");
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll("span");
    let index = 1;
    const slideCount = images.length;

    const updateSlider = () => {
        slidesWrapper.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach((dot) => dot.classList.remove("active"));
        let dotIndex = index - 1;

        if (dotIndex < 0) dotIndex = slideCount - 1;
        if (dotIndex >= slideCount) dotIndex = 0;

        dots[dotIndex].classList.add("active");
    };

    slidesWrapper.addEventListener("transitionend", () => {
        if (index === 0) {
            slidesWrapper.style.transition = "none";
            index = slideCount;
            slidesWrapper.style.transform = `translateX(-${index * 100}%)`;
            setTimeout(() => {
                slidesWrapper.style.transition = "transform 0.5s ease-in-out";
            });
        }

        if (index === slideCount + 1) {
            slidesWrapper.style.transition = "none";
            index = 1;
            slidesWrapper.style.transform = `translateX(-${index * 100}%)`;
            setTimeout(() => {
                slidesWrapper.style.transition = "transform 0.5s ease-in-out";
            });
        }
    });

    nextBtn.onclick = () => {
        index += 1;
        updateSlider();
    };

    prevBtn.onclick = () => {
        index -= 1;
        updateSlider();
    };

    dots.forEach((dot, dotIndex) => {
        dot.onclick = () => {
            index = dotIndex + 1;
            updateSlider();
        };
    });

    setInterval(() => {
        index += 1;
        updateSlider();
    }, 5000);

    updateSlider();
};

// ==============================
// Cart Panel Toggle
// ==============================
// Add to card

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

// ==============================
// App Bootstrap
// ==============================
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

// ==============================
// Cart State + Persistence
// ==============================
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

// ==============================
// Cart Actions
// ==============================
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

// ==============================
// Initial Cart Render
// ==============================
loadCartFromStorage();
addCartToHTML();
renderCartItems();
