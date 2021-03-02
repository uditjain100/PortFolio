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
      return anime.random(-440, 680);
    },
    translateY: () => {
      return anime.random(-280, 150);
    },
    scale: () => {
      return anime.random(1, 5);
    },
    easing: "linear",
    duration: 3000,
    delay: anime.stagger(10),
    complete: animateBlock,
  });
};

animateBlock();
