// Homepage Slider
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
