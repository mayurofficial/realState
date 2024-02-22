(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Toggle .navbar-reduce
   */
  let selectHNavbar = select(".navbar-default");
  if (selectHNavbar) {
    onscroll(document, () => {
      if (window.scrollY > 100) {
        selectHNavbar.classList.add("navbar-reduce");
        selectHNavbar.classList.remove("navbar-trans");
      } else {
        selectHNavbar.classList.remove("navbar-reduce");
        selectHNavbar.classList.add("navbar-trans");
      }
    });
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Search window open/close
   */
  let body = select("body");
  on("click", ".navbar-toggle-box", function (e) {
    e.preventDefault();
    body.classList.add("box-collapse-open");
    body.classList.remove("box-collapse-closed");
  });

  on("click", ".close-box-collapse", function (e) {
    e.preventDefault();
    body.classList.remove("box-collapse-open");
    body.classList.add("box-collapse-closed");
  });

  /**
   * Intro Carousel
   */
  new Swiper(".intro-carousel", {
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Property carousel
   */
  new Swiper("#property-carousel", {
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".propery-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * News carousel
   */
  new Swiper("#news-carousel", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".news-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Testimonial carousel
   */
  new Swiper("#testimonial-carousel", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".testimonial-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Property Single carousel
   */
  new Swiper("#property-single-carousel", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".property-single-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  // Function to render the block dynamically
  function renderBlocks() {
    const swiperWrapper = document.getElementById("swiper-wrapper");

    for (let i = 1; i <= 5; i++) {
      const div = document.createElement("div");
      div.className = "swiper-slide carousel-item-a intro-item bg-image";
      div.style.backgroundImage = `url(assets/img/hero-section/${i}.jpg)`;

      div.innerHTML = `
        <div class="overlay overlay-a"></div>
        <div class="intro-content display-table">
          <div class="table-cell">
            <div class="container">
              <div class="row">
                <div class="col-lg-8">
                  <div class="intro-body">
                    <p class="intro-title-top">
                      Welcome to <br />
                      Ace of Homes
                    </p>
                    <h1 class="intro-title mb-4">
                      Your Gateway to
                      <br />
                      <span class="color-b">Exceptional Living </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      swiperWrapper.appendChild(div);
    }

    // Initialize the swiper (you need to include Swiper library)
    var mySwiper = new Swiper(".swiper-container", {
      // Add your Swiper configuration options here
    });
  }

  // Call the function to render the blocks
  renderBlocks();
})();
