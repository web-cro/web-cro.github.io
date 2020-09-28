// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createGird(10);
}

function draw() {
  background(220);

  displayGrid();
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
  let cellwidth = width / grid[0].length;
  let cellHeight = height / grid.length;


  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x]=== 0){
        fill("Black");
      }

      else{
        fill("white");
      }

      rect(cellwidth * x, cellHeight * y, cellwidth, cellHeight);
    }
  }
}

function cellClicked() {
  let cellwidth = width / grid[0].length;
  let cellHeight = height / grid.length; 
}