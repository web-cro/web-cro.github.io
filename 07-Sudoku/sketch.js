// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cellSize;
const GRIDSIZE = 9;

let sudoku = 
            [[5,3,0,0,7,0,0,0,0],
              [6,0,0,1,9,5,0,0,0],
              [0,9,8,0,0,0,0,6,0],
              [8,0,0,0,6,0,0,0,3],
              [4,0,0,8,0,3,0,0,1],
              [7,0,0,0,2,0,0,0,6],
              [0,6,0,0,0,0,2,8,0],
              [0,0,0,4,1,9,0,0,5],
              [0,0,0,0,8,0,0,7,9]];

let initialState = 
            [[5,3,0,0,7,0,0,0,0],
              [6,0,0,1,9,5,0,0,0],
              [0,9,8,0,0,0,0,6,0],
              [8,0,0,0,6,0,0,0,3],
              [4,0,0,8,0,3,0,0,1],
              [7,0,0,0,2,0,0,0,6],
              [0,6,0,0,0,0,2,8,0],
              [0,0,0,4,1,9,0,0,5],
              [0,0,0,0,8,0,0,7,9]];

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (width < height) {
    cellSize = width / GRIDSIZE;
  }

  else {
    cellSize = height / GRIDSIZE;
  }
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < GRIDSIZE; y++) {
    for (let x = 0; x < GRIDSIZE; x++) {
      strokeWeight(1);
      fill("white");
      rect(x* cellSize, y * cellSize, cellSize, cellSize);

      if (sudoku[y][x] !== 0){
        // show Text

        if (sudoku[y][x] === initialState[y][x]) {
          fill("gray");
        }
        else {
          fill("black");
        }
        textSize(cellSize * 0.8);
        textAlign(CENTER, CENTER);
        text(sudoku[y][x],x* cellSize + cellSize / 2, y * cellSize + cellSize / 2);
      }
    }
  }

  strokeWeight(5);
  line(0, cellSize * 3, cellSize * 9, cellSize * 3);
  line(0, cellSize * 6, cellSize * 9, cellSize * 6);
  line(cellSize * 3, 0, cellSize * 3, cellSize * 9);
  line(cellSize * 6, 0, cellSize * 6, cellSize * 9);
}



function mousePressed() {
  let cellX = floor(mouseX / cellSize);
  let cellY = floor(mouseY / cellSize);

  changeCell(cellX, cellY);
}

function changeCell(x, y) {
  if (sudoku[y][x] !== initialState[y][x] || sudoku[y][x] === 0) {
    sudoku[y][x] = (sudoku[y][x] += 1) % 10;
  }
}