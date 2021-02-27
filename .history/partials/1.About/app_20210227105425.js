const intro = document.querySelector("#intro");
const education = document.querySelector("#education");
const achievement = document.querySelector("#achievements");

const meta0 = document.querySelector("#meta-data");
const meta1 = document.querySelector("#meta-data1");
const meta2 = document.querySelector("#meta-data2");
const meta3 = document.querySelector("#meta-data3");

intro.addEventListener("click", () => {
  console.log("Intro Clicked");
  meta0.style.display = "none";
  meta0.style.display = "none";
  meta0.style.display = "none";
  meta1.style.display = "block";
});

education.addEventListener("click", () => {
  console.log("education Clicked");
  meta2.style.display = "block";
});

achievement.addEventListener("click", () => {
  console.log("achievement Clicked");
  meta3.style.display = "block";
});
