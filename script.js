document.addEventListener('DOMContentLoaded', () => {
  // Team member Section
  const teamContainer = document.getElementById('team');

  if (teamContainer) {
    const team = [
      {
        color: 'red',
        img: '/img/Meng.png',
        name: 'Chea Kimeng',
        role: 'Founder & Developer',
        desc: 'Builds the LEGO system and website.',
        badge: 'LEVEL 10',
      },
      {
        color: 'yellow',
        img: '/img/Hong.png',
        name: 'Hor Menghong',
        role: 'Product Manager',
        desc: 'Manages LEGO sets and quality control.',
        badge: 'LEVEL 8',
      },
      {
        color: 'blue',
        img: '/img/Ly.png',
        name: 'Te Eangly',
        role: 'Designer',
        desc: 'Designs LEGO visuals and brand style.',
        badge: 'LEVEL 7',
      },
      {
        color: 'green',
        img: '/img/Ra.png',
        name: 'Oun Makara',
        role: 'Marketing',
        desc: 'Connects LEGO with customers.',
        badge: 'LEVEL 6',
      },
      {
        color: 'purple',
        img: '/img/Reaksa.png',
        name: 'Hong Reaksa',
        role: 'Marketing',
        desc: 'Connects LEGO with customers.',
        badge: 'LEVEL 5',
      },
      {
        color: 'orange',
        img: '/img/Meysorng.png',
        name: 'Heang Meysorng',
        role: 'Marketing',
        desc: 'Connects LEGO with customers.',
        badge: 'LEVEL 7',
      },
    ];

    teamContainer.innerHTML = team
      .map(
        (m) => `
        <section class="card ${m.color}">
          <div class="badge">${m.badge}</div>
          <div class="studs-top">
            <div class="stud"></div>
            <div class="stud"></div>
            <div class="stud"></div>
          </div>
          <div class="avatar">
            <img src="${m.img}" alt="${m.name}">
          </div>
          <div class="name">${m.name}</div>
          <div class="role">${m.role}</div>
          <div class="desc">${m.desc}</div>
        </section>
      `
      )
      .join('');
  }

  // Product Section
  const products = [
    {
      id: 1,
      title: 'The Going Merry Pirate Ship',
      price: 139.99,
      discount: 0.15,
      rating: 5,
      badges: ['Bestseller'],
      image:
        'https://www.lego.com/cdn/cs/set/assets/blt25bc5b8dc7d77c0b/75639_Prod_en-gb.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1',
    },
    {
      id: 2,
      title: 'The Baratie Floating Restaurant',
      price: 329.99,
      discount: 0.1,
      rating: 4.5,
      badges: ['Sale'],
      image:
        'https://www.lego.com/cdn/cs/set/assets/bltdee182f48a19a789/75640_Prod_en-gb.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1',
    },
    {
      id: 3,
      title: "Buggy the Clown's Circus Tent",
      price: 54.99,
      discount: 0.25,
      rating: 4.5,
      badges: ['Sale'],
      image:
        'https://www.lego.com/cdn/cs/set/assets/blt9d8ff1ff0fe385fb/75637_Prod_en-gb.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1',
    },
    {
      id: 4,
      title: 'Battle at Arlong Park',
      price: 79.99,
      discount: 0.2,
      rating: 4,
      badges: ['Sale'],
      image:
        'https://www.lego.com/cdn/cs/set/assets/blt5b3417d6328c771d/75638_Prod_en-gb.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1',
    },
    {
      id: 5,
      title: 'Windmill Village Hut',
      price: 29.99,
      discount: 0,
      rating: 4,
      badges: [],
      image:
        'https://www.lego.com/cdn/cs/set/assets/blt0feb85637d359729/75636_Prod_en-gb.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1',
    },
    {
      id: 6,
      title: 'Buggy the Clown Figure',
      price: 39.99,
      discount: 0.05,
      rating: 4,
      badges: ['Sale'],
      image:
        'https://www.lego.com/cdn/cs/set/assets/blt18836b965e63a1ab/40800_Prod_en-gb.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1',
    },
    {
      id: 7,
      title: 'AT-AT™',
      price: 64.99,
      discount: 0.3,
      rating: 5,
      badges: ['Sale', 'Star Wars'],
      image:
        'https://www.lego.com/cdn/cs/set/assets/blt26f813f1a1f499c6/75440_Prod_en-gb.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1',
    },
    {
      id: 8,
      title: 'C-3PO™',
      price: 139.99,
      discount: 0.1,
      rating: 4.5,
      badges: ['Star Wars'],
      image:
        'https://www.lego.com/cdn/cs/set/assets/blt1d21181b67dcb8a5/75398_Prod.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1',
    },
    {
      id: 9,
      title: 'Captain Rex™ Helmet',
      price: 68.99,
      discount: 0.15,
      rating: 4,
      badges: ['Star Wars'],
      image:
        'https://www.lego.com/cdn/cs/set/assets/bltde62e4576a817dd4/75349.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1',
    },
    {
      id: 10,
      title: 'X-Wing Starfighter™',
      price: 239.99,
      discount: 0.4,
      rating: 5,
      badges: ['Sale', 'Star Wars'],
      image:
        'https://www.lego.com/cdn/cs/set/assets/blt3e07af4c83a87efd/75355.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1',
    },
    {
      id: 11,
      title: "Jango Fett's Firespray-Class Starship",
      price: 299.99,
      discount: 0.25,
      rating: 4.5,
      badges: ['Sale', 'Star Wars'],
      image:
        'https://www.lego.com/cdn/cs/set/assets/blt616e72cc7801d6d0/75409_Prod.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1',
    },
    {
      id: 12,
      title: 'Millennium Falcon™',
      price: 849.99,
      discount: 0.35,
      rating: 5,
      badges: ['Sale', 'Bestseller'],
      image:
        'https://www.lego.com/cdn/cs/set/assets/blt3349f56c6f192e18/75192_Prod.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1',
    },
  ];

  // function show all product
  function renderProducts(list, container) {
    container.innerHTML = ''; // Clear previous content

    list.forEach((p) => {
      const finalPrice = (p.price * (1 - p.discount)).toFixed(2);

      const card = document.createElement('div');
      card.className = 'product-card';

      card.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <div class="badges">
        ${p.badges.map((b) => `<span class="badge-item">${b}</span>`).join('')}
        ${
          p.discount > 0 && !p.badges.includes('Sale')
            ? `<span class="badge-item">Sale</span>`
            : ''
        }
      </div>
      <h3>${p.title}</h3>
      <div class="price">
        $${finalPrice}
        ${
          p.discount > 0
            ? `<span class="discount">$${p.price.toFixed(2)}</span>`
            : ''
        }
      </div>
      <div class="stars">${'★'.repeat(Math.floor(p.rating))}</div>
      <button class="add-to-bag">Add to Bag</button>
    `;

      container.appendChild(card);
    });
  }

  // Top 4 promotions
  const promoGrid = document.getElementById('promotion-products');
  if (promoGrid) {
    const top4Promos = [...products]
      .filter((p) => p.discount > 0)
      .sort((a, b) => b.discount - a.discount)
      .slice(0, 4);

    renderProducts(top4Promos, promoGrid);
  }

  // All products
  const allProductsGrid = document.getElementById('all-products');
  if (allProductsGrid) {
    renderProducts(products, allProductsGrid);
  }

  // Slide Section
  const slidesWrapper = document.querySelector('.slides');
  const dotsContainer = document.querySelector('.slider-dots');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  const images = [
    'https://lego.bricksmegastore.com/cdn/shop/files/Boxing-Day-Deal_KV2_NEW-SETS_Web-DT.jpg?v=1766535525&width=1920',
    'https://lego.bricksmegastore.com/cdn/shop/files/11371_COUNTDOWN_DT.jpg?v=1767067009&width=1920',
    'https://lego.bricksmegastore.com/cdn/shop/files/21365-LoveBirds_DEC25_PreOrder_KV1_Web_Countdown-DT.jpg?v=1767060094&width=1920',
    'https://lego.bricksmegastore.com/cdn/shop/files/21064-Paris-CityofLove_NOV25_PreOrder_KV1_Web_Countdown-DT.jpg?v=1767060094&width=1920',
  ];

  const promotionLink = 'sale.html';

  const slides = images.map((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide';

    if (i === 0) {
      slide.innerHTML = `
          <a href="${promotionLink}" target="_blank">
            <img src="${src}" />
          </a>
        `;
    } else {
      slide.innerHTML = `<img src="${src}" />`;
    }

    return slide;
  });

  slidesWrapper.appendChild(slides[slides.length - 1].cloneNode(true));

  slides.forEach((slide) => slidesWrapper.appendChild(slide));

  slidesWrapper.appendChild(slides[0].cloneNode(true));

  images.forEach(() => {
    const dot = document.createElement('span');
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.slider-dots span');
  let index = 1;
  const slideCount = images.length;

  function updateSlider() {
    slidesWrapper.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot) => dot.classList.remove('active'));
    let dotIndex = index - 1;

    if (dotIndex < 0) dotIndex = slideCount - 1;
    if (dotIndex >= slideCount) dotIndex = 0;

    dots[dotIndex].classList.add('active');
  }

  slidesWrapper.addEventListener('transitionend', () => {
    if (index === 0) {
      slidesWrapper.style.transition = 'none';
      index = slideCount;
      slidesWrapper.style.transform = `translateX(-${index * 100}%)`;
      setTimeout(() => {
        slidesWrapper.style.transition = 'transform 0.5s ease-in-out';
      });
    }

    if (index === slideCount + 1) {
      slidesWrapper.style.transition = 'none';
      index = 1;
      slidesWrapper.style.transform = `translateX(-${index * 100}%)`;
      setTimeout(() => {
        slidesWrapper.style.transition = 'transform 0.5s ease-in-out';
      });
    }
  });

  // Buttons
  nextBtn.onclick = () => {
    index++;
    updateSlider();
  };

  prevBtn.onclick = () => {
    index--;
    updateSlider();
  };

  dots.forEach((dot, i) => {
    dot.onclick = () => {
      index = i + 1;
      updateSlider();
    };
  });

  setInterval(() => {
    index++;
    updateSlider();
  }, 5000);

  updateSlider();
});
