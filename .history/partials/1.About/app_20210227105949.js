const intro = document.querySelector("#intro");
const education = document.querySelector("#education");
const achievement = document.querySelector("#achievements");

const meta1 = document.querySelector("#meta-data1");
const meta2 = document.querySelector("#meta-data2");
const meta3 = document.querySelector("#meta-data3");

intro.addEventListener("click", () => {
  console.log("Intro Clicked");
  meta1.style.visibility = "hidden";
  meta2.style.visibility = "hidden";
  meta3.style.visibility = "hidden";
  meta1.style.visibility = "visible";
});

education.addEventListener("click", () => {
  console.log("education Clicked");
  meta1.style.visibility = "hidden";
  meta2.style.visibility = "hidden";
  meta3.style.visibility = "hidden";
  meta2.style.visibility = "visible";
});

achievement.addEventListener("click", () => {
  console.log("achievement Clicked");
  meta1.style.visibility = "hidden";
  meta2.style.visibility = "hidden";
  meta3.style.visibility = "hidden";
  meta3.style.visibility = "visible";
});
