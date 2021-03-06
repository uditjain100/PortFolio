const intro = document.querySelector("#intro");
const education = document.querySelector("#education");

const introBasket = document.querySelector("#introBasket");
const educationBasket = document.querySelector("#educationBasket");

const removeDisplay = () => {
  introBasket.style.display = "none";
  educationBasket.style.display = "none";
};

intro.addEventListener("click", () => {
  removeDisplay();
  introBasket.style.display = "block";
});

education.addEventListener("click", () => {
  removeDisplay();
  educationBasket.style.display = "block";
});
