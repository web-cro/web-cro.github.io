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

let playerX = 0;
let playerY = 4;

function preload() {
  level = loadStrings("assets/1level.txt");
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

  level[playerY][playerX] = 9;

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

      else if (level[y][x] === 9) {
        fill("red");
      }

      else if (level[y][x] === 2){
        fill(61,30,0);
      }

      else if (level[y][x] === 1) {
        fill(12,102,0);
      }
      rect(cellWidth*x, cellHeight*y, cellWidth, cellHeight);
    }
  }
}

function keyPressed() {
  if (key === "w") {
    //move up
    if (level[playerY - 1][playerX] === 0) {
      level[playerY][playerX] = 0; //resetting players current location to white
      playerY -= 1;
      level[playerY][playerX] = 9; //set new location to red
    }
  }
  if (key === "s") {
    //move down
    if (level[playerY + 1][playerX] === 0) {
      level[playerY][playerX] = 0; //resetting players current location to white
      playerY += 1;
      level[playerY][playerX] = 9; //set new location to red
    }
  }
  if (key === "d") {
    //move right
    if (level[playerY][playerX + 1] === 0) {
      level[playerY][playerX] = 0; //resetting players current location to white
      playerX += 1;
      level[playerY][playerX] = 9; //set new location to red
    }
  }
  if (key === "a") {
    //move left
    if (level[playerY][playerX - 1] === 0) {
      level[playerY][playerX] = 0; //resetting players current location to white
      playerX -= 1;
      level[playerY][playerX] = 9; //set new location to red
    }
  }
}

