import CanvasNest from "canvas-nest.js";

// const CanvasNest = require("canvas-nest.js");

const config = {
  color: "00,30,49",
  count: 188,
};

const body = document.querySelector("body");

const cn = new CanvasNest(body, config);
