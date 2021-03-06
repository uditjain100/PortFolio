const tech = document.querySelector("#techHeading");
const social = document.querySelector("#socialHeading");

const techBasket = document.querySelector("#techBasket");
const socialBasket = document.querySelector("#socialBasket");

const removeDisplay = () => {
  techBasket.style.display = "none";
  socialBasket.style.display = "none";
};

tech.addEventListener("click", () => {
  removeDisplay();
  techBasket.style.display = "block";
});

social.addEventListener("click", () => {
  removeDisplay();
  socialBasket.style.display = "block";
});
