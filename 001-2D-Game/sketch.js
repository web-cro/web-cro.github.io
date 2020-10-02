// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const GRIDSIZE = 15;
let cellWidth;
let cellHeight;
let level;

function preload() {
  level = loadStrings("assets/1level.txt");
  level = loadStrings("assets/2level.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // convert Level into 2d array
  for (let i=0; i<level.length; i++) {
    level[i] = level[i].split(",");
  }

  //loop through the whole 2d array, and turn everything to numbers
  for (let y=0; y<GRIDSIZE; y++) {
    for (let x=0; x<GRIDSIZE; x++) {
      level[y][x] = int(level[y][x]);
    }
  }


  cellWidth = width / level[0].length;
  cellHeight = height / level.length;
}

function draw() {
  background(220);

  displaylevel();
}

function displaylevel() {
  for (let y = 0; y < GRIDSIZE; y++) {
    for (let x = 0; x < GRIDSIZE; x++) {

      if (level[y][x] === 0) {
        fill(48,48,48);
      }

      else if (level[y][x] === 2){
        fill(61,30,0);
      }

      else {
        fill(12,102,0);
      }
      rect(cellWidth*x, cellHeight*y, cellWidth, cellHeight);
    }
  }
}

