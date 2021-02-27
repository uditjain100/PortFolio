const tech = document.querySelector("#techHeading");
const social = document.querySelector("#socialHeading");

const introBasket = document.querySelector("#introBasket");
const socialBasket = document.querySelector("#socialBasket");

const removeDisplay = () => {
  introBasket.style.display = "none";
  socialBasket.style.display = "none";
};

tech.addEventListener("click", () => {
  removeDisplay();
  introBasket.style.display = "block";
});

social.addEventListener("click", () => {
  removeDisplay();
  socialBasket.style.display = "block";
});
