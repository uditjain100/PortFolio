const intro = document.querySelector("#intro");
const education = document.querySelector("#education");
const achievement = document.querySelector("#achievements");

const meta0 = document.querySelector("#meta-data");
const meta1 = document.querySelector("#meta-data1");
const meta2 = document.querySelector("#meta-data2");
const meta3 = document.querySelector("#meta-data3");

intro.addEventListener("click", () => {
  console.log("Intro Clicked");
  meta0.style.visibility = "hidden";
  meta1.style.visibility = "hidden";
  meta2.style.visibility = "hidden";
  meta3.style.visibility = "hidden";
  meta1.style.visibility = "block";
});

education.addEventListener("click", () => {
  console.log("education Clicked");
  meta0.style.visibility = "hidden";
  meta1.style.visibility = "hidden";
  meta2.style.visibility = "hidden";
  meta3.style.visibility = "hidden";
  meta2.style.visibility = "block";
});

achievement.addEventListener("click", () => {
  console.log("achievement Clicked");
  meta0.style.visibility = "hidden";
  meta1.style.visibility = "hidden";
  meta2.style.visibility = "hidden";
  meta3.style.visibility = "hidden";
  meta3.style.visibility = "block";
});
