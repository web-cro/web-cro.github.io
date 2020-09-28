// Arrays - Using Perlin Noise
// Abdul Raffey
// September 28, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(220);

  x = noise(time) * width;

  fill("black");
  circle(x, y, 40);

  time += 0.02;
}
