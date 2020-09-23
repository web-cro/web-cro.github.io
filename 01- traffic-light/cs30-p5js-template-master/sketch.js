// Traffic Light
// Abdul Raffey
// Sept 23, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let greenLightTime = 4000;
let yellowLightTime = 1000;
let redLightTime = 3000;
let lightColor = "red";
let lastSwitch = 0;
// let trafficLightColor = ["green", "yellow", "red"];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  pickColor(); // choose the right the color to display

  drawOutLightOfLights();
  showColor();
}

function drawOutLightOfLights(){
  // box
  rectMode(CENTER);
  fill("Black");
  rect(width / 2, height / 2, 75, 200, 10);

  // lights
  fill("white");
  circle(width /2, height/2 - 62, 50); // top
  circle(width /2, height /2, 50); // middle
  circle(width /2, height/2 + 62, 50); // bottom
}

function showColor() {
  if (lightColor === "red"){
    fill("red");
    circle(width /2, height/2 - 62, 50); // top
  }

  else if (lightColor === "yellow") {
    fill("yellow");
    circle(width /2, height /2, 50); // middle
  }

  else if (lightColor === "green") {
    fill("green");
    circle(width /2, height/2 + 62, 50); // bottom
  }
}

function pickColor()  {
  if (lightColor === "green" && millis() > lastSwitch + greenLightTime) {
    lightColor = "yellow";
    lastSwitch = millis();
  }

  else if (lightColor === "yellow" && millis() > lastSwitch + yellowLightTime) {
    lightColor = "red";
    lastSwitch = millis();
  }

  else if (lightColor === "red" && millis() > lastSwitch + redLightTime) {
    lightColor = "green";
    lastSwitch = millis();
  }
}