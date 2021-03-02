const container = document.querySelector(".container");

for (var i = 0; i < 1000; i++) {
  const blocks = document.createElement("div");
  blocks.classList.add("block");
  container.appendChild(blocks);
}

const animateBlock = () => {
  anime({
    targets: ".block",
    translateX: () => {
      return anime.random(-500, 750);
    },
    translateY: () => {
      return anime.random(-300, 100);
    },
    scale: () => {
      return anime.random(1, 5);
    },
    easing: "linear",
    duration: 1000,
    delay: anime.stagger(1),
    complete: animateBlock,
  });
};

animateBlock();
