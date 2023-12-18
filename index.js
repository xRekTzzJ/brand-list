// Фотографии брендов
const items = [
  { image: "./img/lenovo.svg" },
  { image: "./img/samsung.svg" },
  { image: "./img/apple.svg" },
  { image: "./img/VS.svg" },
  { image: "./img/bosch.svg" },
  { image: "./img/hp.svg" },
  { image: "./img/acer.svg" },
  { image: "./img/sony.svg" },
  { image: "./img/lenovo.svg" },
  { image: "./img/samsung.svg" },
  { image: "./img/apple.svg" },
];

const swiperWrapper = document.querySelector(".swiper-wrapper");
const swiperElement = document.querySelector(".swiper-wrapper__element");
const brandsList = document.querySelector(".brands__list");
const brandsTemplate = document.querySelector(".brands__item");
const readMoreButton = document.querySelector(".brands__read-more");
const readMoreButtonText = document.querySelector(".brands__read-more-text");
const readMoreButtonIc = document.querySelector(".brands__read-more-icon");

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

//Отрендерить бренды
items.forEach((item) => {
  swiperElement.content.querySelector(".swiper-slide__item-logo").src =
    item.image;
  const brandItem = swiperElement.content.cloneNode(true);
  swiperWrapper.append(brandItem);
});
items.forEach((item) => {
  brandsTemplate.content.querySelector(".brands__item-logo").src = item.image;
  const brandItem = brandsTemplate.content.cloneNode(true);
  brandsList.append(brandItem);
});

// Интегрировать свайпер
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
});
//
