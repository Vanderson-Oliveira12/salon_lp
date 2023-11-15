function onMenu() {
  let menuEl = document.querySelector(".btn-menu");
  let closeEl = document.querySelector(".btn-close");

  let navEl = document.querySelector(".nav-list");

  menuEl.addEventListener("click", handleOpenMenu);
  closeEl.addEventListener("click", handleCloseMenu);

  function handleOpenMenu() {
    navEl.classList.add("active");
  }
  function handleCloseMenu() {
    navEl.classList.remove("active");
  }
}

function onMenuScroll() {
  let menuEl = document.querySelector("#nav");

  window.addEventListener("scroll", calcMenuPos);

  function calcMenuPos(e) {
    let posScroll = window.scrollY;

    if (posScroll > 15) {
      menuEl.classList.add("nav-fixed");

      return;
    }

    menuEl.classList.remove("nav-fixed");
  }
}

function onCarousel() {
  let carouselContainerEl = document.querySelector(".about-carousel-container");
  let carouselImages = carouselContainerEl.querySelectorAll("img");

  let imagesLength = carouselImages.length - 1;
  let index = 0;

  setInterval(() => {
    carouselImages[index].classList.remove("shown");

    index++;

    if (index > imagesLength) {
      index = 0;
    }

    carouselImages[index].classList.add("shown");
  }, 3000);
}

onCarousel();
onMenu();
onMenuScroll();
