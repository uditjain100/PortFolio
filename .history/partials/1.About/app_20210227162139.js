const intro = document.querySelector("#intro");
const education = document.querySelector("#education");
const achievement = document.querySelector("#activities");

const introBasket = document.querySelector("#introBasket");
const educationBasket = document.querySelector("#educationBasket");
const activitiesBasket = document.querySelector("#activitiesBasket");

intro.addEventListener("click", () => {
  console.log("Intro Clicked");
  introBasket.style.display = "none";
  educationBasket.style.display = "none";
  activitiesBasket.style.display = "none";
  introBasket.style.display = "block";
});

education.addEventListener("click", () => {
  console.log("education Clicked");
  introBasket.style.display = "none";
  educationBasket.style.display = "none";
  activitiesBasket.style.display = "none";
  educationBasket.style.display = "block";
});

achievement.addEventListener("click", () => {
  console.log("achievement Clicked");
  introBasket.style.display = "none";
  educationBasket.style.display = "none";
  activitiesBasket.style.display = "none";
  activitiesBasket.style.display = "block";
});
