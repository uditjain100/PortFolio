const toggler = document.querySelector("#toggler-btn");

var i = 0;

toggler.addEventListener("click", function (e) {
  if (i % 2 !== 0) {
    toggler.childNodes[1].textContent = "&#10005;";
    console.log(toggler.childNodes[1].textContent);
  } else {
    toggler.childNodes[1].textContent = "&#10009;";
    console.log(toggler.childNodes[1].textContent);
  }
  i++;
});
