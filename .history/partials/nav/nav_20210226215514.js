const toggler = document.querySelector("#toggler-btn");

var i = 0;

toggler.addEventListener("click", function (e) {
  if (i % 2 == 0) {
    const child = document.childNodes(toggler);
    console.log(child);
  } else {
    console.log("asdf ;lkj adsf ;lkj asdf ;lkj  ");
  }
  i++;
});
