// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let numberOfRects;
let rectHeight = [];
let rectwidth;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRects = width;
  rectwidth = width / numberOfRects;
  setTheHeight();
}

function draw() {
  background(220);
  displayRects();
}

function setTheHeight() {
  for (let i = 0; i < numberOfRects; i ++) {
    let theHeight = noise(time) * height;
    rectHeight.push(theHeight);
    time += 0.005;
  }
}

function displayRects() {
  for (let i = 0; i < numberOfRects; i++) {
    fill("black");
    rect(i * rectwidth, height - rectHeight[i], rectwidth, rectHeight[i]);
  }
}