// *********************** Common Section

// import CanvasNest from "canvas-nest.js";

// const config = {
//   color: "00,30,49",
//   count: 188,
// };

// const body = document.querySelector("body");

// const cn = new CanvasNest(body, config);

const body = document.querySelector("body");
const header = document.querySelector("#navbar");
body.style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
body.onscroll = () => {
  console.log("Heeeeeeeeyyyyyyyyyyyyyyyyyy");
  var rand1 = 255;
  var rand2 = 0;
  var rand3 = 0;
  body.style.backgroundColor = "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")";
  console.log(header.style.backgroundColor);
};

// body.addEventListener("scroll", () => {
//   console.log("Heeeeeeeeyyyyyyyyyyyyyyyyyy");
// });

// *********************** About Section

const intro = document.querySelector("#intro");
const education = document.querySelector("#education");
const activities = document.querySelector("#activities");

const introBasket = document.querySelector("#introBasket");
const educationBasket = document.querySelector("#educationBasket");
const activitiesBasket = document.querySelector("#activitiesBasket");

const removeDisplayAbout = () => {
  introBasket.style.display = "none";
  educationBasket.style.display = "none";
  activitiesBasket.style.display = "none";
};

intro.addEventListener("click", () => {
  removeDisplayAbout();
  introBasket.style.display = "block";
});

education.addEventListener("click", () => {
  removeDisplayAbout();
  educationBasket.style.display = "block";
});

activities.addEventListener("click", () => {
  removeDisplayAbout();
  activitiesBasket.style.display = "block";
});

var typed = new Typed(".typing", {
  strings: ["Student", "Programmer", "Developer", "Engineer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// *********************** Services Section

// *********************** Skills Section

const languages = document.querySelector("#languages");
const ides = document.querySelector("#ides");
const dbs = document.querySelector("#dbs");
const other = document.querySelector("#other");

const languagesBasket = document.querySelector("#languagesBasket");
const idesBasket = document.querySelector("#idesBasket");
const dbsBasket = document.querySelector("#dbsBasket");
const otherBasket = document.querySelector("#otherBasket");

const removeDisplaySkills = () => {
  languagesBasket.style.display = "none";
  idesBasket.style.display = "none";
  dbsBasket.style.display = "none";
  otherBasket.style.display = "none";
};

languages.addEventListener("click", () => {
  removeDisplaySkills();
  languagesBasket.style.display = "block";
});

ides.addEventListener("click", () => {
  removeDisplaySkills();
  idesBasket.style.display = "block";
});

dbs.addEventListener("click", () => {
  removeDisplaySkills();
  dbsBasket.style.display = "block";
});

other.addEventListener("click", () => {
  removeDisplaySkills();
  otherBasket.style.display = "block";
});

// *********************** Links Section

const tech = document.querySelector("#techHeading");
const social = document.querySelector("#socialHeading");

const techBasket = document.querySelector("#techBasket");
const socialBasket = document.querySelector("#socialBasket");

const removeDisplayLinks = () => {
  techBasket.style.display = "none";
  socialBasket.style.display = "none";
};

tech.addEventListener("click", () => {
  removeDisplayLinks();
  techBasket.style.display = "block";
});

social.addEventListener("click", () => {
  removeDisplayLinks();
  socialBasket.style.display = "block";
});

// *********************** Contact Section

(function () {
  "use-strict";
  var forms = document.querySelectorAll(".validated-form");
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
