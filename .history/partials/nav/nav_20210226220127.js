const toggler = document.querySelector("#toggler-btn");

var i = 0;

toggler.addEventListener("click", function (e) {
  if (i % 2 == 0) {
    toggler.childNodes[1].textContent;
    console.log(toggler.childNodes[1].textContent);
  } else {
    console.log("asdf ;lkj adsf ;lkj asdf ;lkj  ");
  }
  i++;
});
