const toggler = document.querySelector("#toggler-btn");

var i = 0;

toggler.addEventListener("click", function (e) {
  if (i % 2 == 0) {
    const child = toggler.childNodes[1].textContent;
    console.log(child);
  } else {
    console.log("asdf ;lkj adsf ;lkj asdf ;lkj  ");
  }
  i++;
});
