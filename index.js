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
  readMoreButtonText.textContent === "Показать все"
    ? (readMoreButtonText.textContent = "Cкрыть")
    : (readMoreButtonText.textContent = "Показать все");
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
  mousewheel: true,
  keyboard: true,

  slidesPerView: "auto",
  spaceBetween: 16,
});
//
