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
let levelPath;
let loadLevel = 1;

let playerX = 0;
let playerY = 4;

function preload() {
  level = loadStrings("assets/" + loadLevel + "level.txt");
  levelPath = loadStrings("assets/" + loadLevel + "levelpath.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  movePlayer();
  window.setInterval(movePlayer, 500);

  // convert Level into 2d array
  for (let i=0; i<level.length; i++) {
    level[i] = level[i].split(",");
  }

  //loop through the whole 2d array, and turn everything to numbers
  for (let y = 0; y<GRIDSIZE; y++) {
    for (let x = 0; x<GRIDSIZE; x++) {
      level[y][x] = int(level[y][x]);
    }
  }


  // convert Level Path into 2d array
  for (let i=0; i<levelPath.length; i++) {
    levelPath[i] = levelPath[i].split(",");
  }

  //loop through the whole 2d array, and turn everything to numbers
  for (let y = 0; y<GRIDSIZE; y++) {
    for (let x = 0; x<GRIDSIZE; x++) {
      levelPath[y][x] = int(levelPath[y][x]);
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

      else if (level[y][x] === 3) {
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

function movePlayer() {
  //move up
  for (let y = 0; y < GRIDSIZE; y++) {
    for (let x = 0; x < GRIDSIZE; x++) {
      levelPath[playerY][playerX] = 3;
      if (levelPath[playerY - 1][playerX] === 3) {
        level[playerY][playerX] = 0;
        playerY -= 1;
        level[playerY][playerX] = levelPath[playerY][playerX];
      }
      //move down
      else if (levelPath[playerY + 1][playerX] === 3) {
        level[playerY][playerX] = 0;
        playerY += 1;
        level[playerY][playerX] = levelPath[playerY][playerX];
      }
    
      //move right
      else if (levelPath[playerY][playerX + 1] === 3) {
        level[playerY][playerX] = 0;
        playerX += 1;
        level[playerY][playerX] = levelPath[playerY][playerX];
      }
      
      //move left
      else if (levelPath[playerY][playerX - 1] === 3) {
        level[playerY][playerX] = 0; //resetting players current location to white
        playerX -= 1;
        level[playerY][playerX] = levelPath[playerY][playerX]; //set new location to red
      }
    }
  }
}

