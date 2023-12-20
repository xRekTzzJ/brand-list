const brandsContainer = document.querySelector(".brands");
const brandsList = brandsContainer.querySelector(".brands__list");
const readMoreButton = brandsContainer.querySelector(".brands__read-more");
const readMoreButtonText = brandsContainer.querySelector(
  ".brands__read-more-text"
);
const readMoreButtonIc = brandsContainer.querySelector(
  ".brands__read-more-icon"
);

// Развернуть бренды
const deployBrandList = () => {
  brandsList.classList.toggle("brands__list_deployed");
  if (readMoreButtonText.textContent === "Показать все") {
    readMoreButtonText.textContent = "Cкрыть";
  } else {
    readMoreButtonText.textContent = "Показать все";
  }
  readMoreButtonIc.classList.toggle("brands__read-more-icon_reverse");
};
readMoreButton.addEventListener("click", deployBrandList);

// Интегрировать свайпер
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
  spaceBetween: 190,
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    440: {
      spaceBetween: 100,
      slidesPerView: 2,
    },
    500: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    580: {
      spaceBetween: 0,
      slidesPerView: 2,
    },
    600: {
      spaceBetween: 200,
      slidesPerView: 3,
    },
    640: {
      spaceBetween: 130,
      slidesPerView: 3,
    },
    675: {
      spaceBetween: 100,
      slidesPerView: 3,
    },
    720: {
      spaceBetween: 50,
      slidesPerView: 3,
    },
    760: {
      spaceBetween: 0,
      slidesPerView: 3,
    },
  },
});
//
