// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const GRIDSIZE = 15;
let cellWidth;
let cellHeight;

let grid = 
        [[1,1,1,1,1,1,1,1,1,1,1,1,1,2,2],
          [1,1,1,1,1,1,0,0,0,0,0,0,1,2,2],
          [1,1,1,1,1,1,0,1,1,1,1,0,1,2,2],
          [1,1,1,1,1,1,0,1,1,1,1,0,1,2,2],
          [0,0,1,1,1,1,0,1,1,1,1,0,1,2,2],
          [1,0,0,0,0,1,0,1,1,1,1,0,1,2,2],
          [1,1,1,1,0,1,0,1,1,1,1,0,1,2,2],
          [1,1,1,1,0,1,0,1,1,1,1,0,1,2,2],
          [1,1,1,1,0,1,0,1,1,1,1,0,1,2,2],
          [1,1,1,1,0,1,0,1,1,1,1,0,1,2,2],
          [1,1,1,1,0,0,0,1,1,1,1,0,1,2,2],
          [1,1,1,1,1,1,1,1,1,1,1,0,1,2,2],
          [1,1,1,1,1,1,1,1,1,1,1,0,1,2,2],
          [1,1,1,1,1,1,1,1,1,1,1,0,0,2,2],
          [1,1,1,1,1,1,1,1,1,1,1,1,1,2,2]];
function setup() {
  createCanvas(windowWidth, windowHeight);

  cellWidth = width / grid[0].length;
  cellHeight = height / grid.length;
}

function draw() {
  background(220);

  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < GRIDSIZE; y++) {
    for (let x = 0; x < GRIDSIZE; x++) {

      if (grid[y][x] === 0) {
        fill(48,48,48);
      }

      else if (grid[y][x] === 2){
        fill(61,30,0);
      }

      else {
        fill(12,102,0);
      }
      rect(cellWidth*x, cellHeight*y, cellWidth, cellHeight);
    }
  }
}

