// timer demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let blinkTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  blinkTime = new Timer(1000);
}

function draw() {
  if (blinkTime.isDone()) {
    background("red");
    blinkTime.setWaitTime(2000);
    blinkTime.reset();
  }
  else {
    background("white");
  }
}

class Timer {
  constructor(waitTime) {
    this.waitTime = waitTime;
    this.beginTime = millis();
    this.endTime = this.beginTime + this.waitTime;
  }

  isDone() {
    return millis() >= this.endTime;
  }

  reset() {
    this.beginTime = millis();
    this.endTime = this.beginTime + this.waitTime;
  }

  setWaitTime(waitTime) {
    this.waitTime = waitTime;
  }
}