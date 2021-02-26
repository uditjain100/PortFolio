const toggler = document.querySelector("#toggler-btn");

var i = 0;

toggler.addEventListener("click", function (e) {
  if (i % 2 == 0) {
    console.log("asdf ;lkj ");
  } else {
    console.log("asdf ;lkj adsf ;lkj asdf ;lkj  ");
  }
  console.log("asdf ;lkj ");
  console.log(toggler);
  console.log(e);
});
