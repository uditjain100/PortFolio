const tech = document.querySelector("#techHeading");
const education = document.querySelector("#socialHeading");

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

education.addEventListener("click", () => {
  removeDisplay();
  educationBasket.style.display = "block";
});
