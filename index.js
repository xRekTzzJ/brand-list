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
const brandsList = document.querySelector(".brands__list");
const brandsTemplate = document.querySelector(".brands__item");
items.forEach((item) => {
  brandsTemplate.content.querySelector(".brands__item-logo").src = item.image;
  const brandItem = brandsTemplate.content.cloneNode(true);
  brandsList.append(brandItem);
});
