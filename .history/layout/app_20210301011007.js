// *********************** Common Section

import CanvasNest from "canvas-nest.js";

const config = {
  color: "00,30,49",
  count: 188,
};

const body = document.querySelector("body");

const cn = new CanvasNest(body, config);

// *********************** About Section

const intro = document.querySelector("#intro");
const education = document.querySelector("#education");
const activities = document.querySelector("#activities");

const introBasket = document.querySelector("#introBasket");
const educationBasket = document.querySelector("#educationBasket");
const activitiesBasket = document.querySelector("#activitiesBasket");

const removeDisplay = () => {
  introBasket.style.display = "none";
  educationBasket.style.display = "none";
  activitiesBasket.style.display = "none";
};

intro.addEventListener("click", () => {
  removeDisplay();
  introBasket.style.display = "block";
});

education.addEventListener("click", () => {
  removeDisplay();
  educationBasket.style.display = "block";
});

activities.addEventListener("click", () => {
  removeDisplay();
  activitiesBasket.style.display = "block";
});

var typed = new Typed(".typing", {
  strings: ["Student", "Programmer", "Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
