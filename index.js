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
const brandsList = document.querySelector(".swiper-wrapper");
const brandsTemplate = document.querySelector(".swiper-wrapper__element");
items.forEach((item) => {
  brandsTemplate.content.querySelector(".swiper-slide__item-logo").src =
    item.image;
  const brandItem = brandsTemplate.content.cloneNode(true);
  brandsList.append(brandItem);
});
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
});
