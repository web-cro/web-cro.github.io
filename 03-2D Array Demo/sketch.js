// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createGird(10);
  cellWidth = width / grid[0].length;
  cellHeight = height / grid.length;
}

function draw() {
  background(220);

  displayGrid();
}

function mousePressed() {
  let cellX = floor(mouseX / cellWidth);
  let cellY = floor(mouseY / cellHeight);

  console.log(cellX, cellY);
  
  if (grid[cellY][cellX] === 0){
    grid[cellY][cellX] = 1;
  }

  else {
    grid[cellY][cellX] = 0;
  }
}

function keyPressed(){
  if (key === " ") {
    grid = createGird(10);
  }
}

function createGird(gridSize) {
  let grid = [];
  for (let i = 0; i < gridSize; i++) {
    grid.push([]);
    for (let j = 0; j < gridSize; j++) {
      if (random(100) < 50) {
        grid[i].push(0);
      }
      else {
        grid[i].push(1);
      }
    }
  }
  return grid;
}

function displayGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x]=== 0){
        fill("Black");
      }

      else{
        fill("white");
      }

      rect(cellWidth * x, cellHeight * y, cellWidth, cellHeight);
    }
  }
}

function cellClicked() {
  let cellwidth = width / grid[0].length;
  let cellHeight = height / grid.length; 
}