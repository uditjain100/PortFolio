const toggler = document.querySelector("#toggler-btn");

var i = 0;

toggler.addEventListener("click", function (e) {
  if (i % 2 == 0) {
    console.log(e.target);
  } else {
    console.log("asdf ;lkj adsf ;lkj asdf ;lkj  ");
  }
  i++;
});
