const intro = document.querySelector("#intro");
const education = document.querySelector("#education");
const achievement = document.querySelector("#achievements");

const meta1 = document.querySelector("#introBasket");
const meta2 = document.querySelector("#educationBasket");
const meta3 = document.querySelector("#meta-data3");

intro.addEventListener("click", () => {
  console.log("Intro Clicked");
  meta1.style.display = "none";
  meta2.style.display = "none";
  meta3.style.display = "none";
  meta1.style.display = "block";
});

education.addEventListener("click", () => {
  console.log("education Clicked");
  meta1.style.display = "none";
  meta2.style.display = "none";
  meta3.style.display = "none";
  meta2.style.display = "block";
});

achievement.addEventListener("click", () => {
  console.log("achievement Clicked");
  meta1.style.display = "none";
  meta2.style.display = "none";
  meta3.style.display = "none";
  meta3.style.display = "block";
});
