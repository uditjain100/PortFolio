const languages = document.querySelector("#languages");
const ides = document.querySelector("#ides");
const dbs = document.querySelector("#dbs");
const others = document.querySelector("#others");

const introBasket = document.querySelector("#introBasket");
const idesBasket = document.querySelector("#idesBasket");
const dbsBasket = document.querySelector("#dbsBasket");

const removeDisplay = () => {
  introBasket.style.display = "none";
  idesBasket.style.display = "none";
  dbsBasket.style.display = "none";
};

languages.addEventListener("click", () => {
  removeDisplay();
  introBasket.style.display = "block";
});

ides.addEventListener("click", () => {
  removeDisplay();
  idesBasket.style.display = "block";
});

dbs.addEventListener("click", () => {
  removeDisplay();
  dbsBasket.style.display = "block";
});

others.addEventListener("click", () => {
  removeDisplay();
  dbsBasket.style.display = "block";
});
