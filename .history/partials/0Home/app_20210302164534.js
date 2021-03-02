const container = document.querySelector(".container");

for (var i = 0; i < 100; i++) {
  const blocks = document.createElement("div");
  blocks.classList.add("block");
  container.appendChild(blocks);
}

const animateBlock = () => {
  anime({
    targets: ".block",
    translateX: () => {
      return anime.random(-700, 700);
    },
    translateY: () => {
      return anime.random(-700, 700);
    },
    scale: () => {
      return anime.random(1, 5);
    },

    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: function (el, i) {
      return i * 250;
    },
    direction: "alternate",
    loop: true,
  });
};

animateBlock();
