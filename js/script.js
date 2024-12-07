document.querySelectorAll(".image-slider img").forEach((image) => {
  image.addEventListener("click", () => {
    // Get the src attribute of the clicked image
    var src = image.getAttribute("src");

    // Update the main image's src
    document.querySelector(".main-home-image").src = src;
  });
});

var swiper = new Swiper(".review-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grabCursor: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
  },
});

function showMenu() {
  const sideMenu = document.querySelector(".navbar");
  sideMenu.classList.add("active");

  document.addEventListener("click", closeMenuOnClickOutside);
}

function hideMenu() {
  const sideMenu = document.querySelector(".navbar");
  sideMenu.classList.remove("active");

  document.removeEventListener("click", closeMenuOnClickOutside);
}

function closeMenuOnClickOutside(event) {
  const sideMenu = document.querySelector(".navbar");
  const menuButton = document.querySelector("#menu-btn");

  if (!sideMenu.contains(event.target) && !menuButton.contains(event.target)) {
    hideMenu();
  }
}
