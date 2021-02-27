const tech = document.querySelector("#techHeading");
const social = document.querySelector("#socialHeading");

const introBasket = document.querySelector("#introBasket");
const educationBasket = document.querySelector("#educationBasket");

const removeDisplay = () => {
  introBasket.style.display = "none";
  educationBasket.style.display = "none";
};

tech.addEventListener("click", () => {
  removeDisplay();
  introBasket.style.display = "block";
});

social.addEventListener("click", () => {
  removeDisplay();
  educationBasket.style.display = "block";
});
