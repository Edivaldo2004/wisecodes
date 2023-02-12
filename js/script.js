const body = document.querySelector("body")
const toggle = document.querySelector(".toggle");

      let getMode = localStorage.getItem("mode");
      if (getMode && getMode === "dark") {
        body.classList.add("dark");
        toggle.classList.add("active");
      }

      toggle.addEventListener("click", () => {
        body.classList.toggle("dark");

        if (!body.classList.contains("dark")) {
          return localStorage.setItem("mode", "light");
        }
        localStorage.setItem("mode", "dark");
      });

      toggle.addEventListener("click", () => toggle.classList.toggle("active"))


    /*  */

    var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    
        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        },
      });