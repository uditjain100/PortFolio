const languages = document.querySelector("#languages");
const ides = document.querySelector("#ides");
const dbs = document.querySelector("#dbs");
const other = document.querySelector("#other");

const introBasket = document.querySelector("#introBasket");
const idesBasket = document.querySelector("#idesBasket");
const dbsBasket = document.querySelector("#dbsBasket");
const otherBasket = document.querySelector("#otherBasket");

const removeDisplay = () => {
  introBasket.style.display = "none";
  idesBasket.style.display = "none";
  dbsBasket.style.display = "none";
  otherBasket.style.display = "none";
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

other.addEventListener("click", () => {
  removeDisplay();
  otherBasket.style.display = "block";
});
