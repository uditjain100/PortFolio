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
  console.log("Intro Clicked");
  introBasket.style.display = "block";
});

education.addEventListener("click", () => {
  console.log("education Clicked");
  educationBasket.style.display = "block";
});

activities.addEventListener("click", () => {
  console.log("activities Clicked");
  introBasket.style.display = "none";
  educationBasket.style.display = "none";
  activitiesBasket.style.display = "none";
  activitiesBasket.style.display = "block";
});
