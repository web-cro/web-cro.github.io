// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// **********************************************************************
//  A* educated guess to find the best path from point A to point B
//  A* formula is f(n) = g(n) + h(n)
//  f(n) = time
//  g(n) = time from startingPoint to finish
//  h(n) = IDK ??

// add walls and also the ablity to sideways

const GRIDSIZE = 50;
let grid = new Array(GRIDSIZE);

let cellsToCheck = [];
let cellThatHaveBeenChecked = [];
let startingPoint;
let endingPoint;
let cellWidth, cellHeight;
let path = [];
let currentValue;

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateGrid();

  // startingPoint point
  startingPoint = grid[0][0];
  // No wall at starting point
  startingPoint.wall = false;
  // endingPoint point
  endingPoint = grid[49][49];
  // No wall at ending point
  endingPoint.wall = false;

  cellsToCheck.push(startingPoint);
}

function draw() {
  findPath();
  background(0);
  displayPath();
}

// look through the array and remove any cells that we have already visted
function removeFromArray(array, value) {
  for (let x = array.length - 1; x >= 0; x--) {
    if (array[x] === value) {
      array.splice(x, 1);
    }
  }
}

// check the distance between the startingPointing and endingPointing points
function checkDistance(a , b) {
  let distance = abs(a.x - b.x) + abs(a.y - b.y);
  return distance;
}

class Pathfinder {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.neighborsToCheck = [];
    this.wall = false;


    // Create random wall to cover 0.3 or 30% on the grid
    if (random(1) <= 0.3) {
      this.wall = true;
    }
  }
  // create and color rects to use when display grid
  displayGrid(color) {
    strokeWeight(0);
    fill(color);
    if (this.wall) {
      fill(0);
    }
    rect(this.x * cellWidth, this.y * cellHeight, cellWidth - 1, cellHeight - 1);
  }

  checkNeighbors(grid) {
    let x = this.x;
    let y = this. y;
    // Check neighbors
    if (x < GRIDSIZE - 1) {
      this.neighborsToCheck.push(grid[x + 1] [y]);
    }

    if (x > 0) {
      this.neighborsToCheck.push(grid[x - 1] [y]);
    }

    if (y < GRIDSIZE - 1) {
      this.neighborsToCheck.push(grid[x] [y + 1]);
    }
    
    if (y > 0) {
      this.neighborsToCheck.push(grid[x] [y - 1]);
    }
  }
}

// A grid
function generateGrid() {
  cellWidth = width / GRIDSIZE;
  cellHeight = height / GRIDSIZE;

  // making an 2D array
  for (let x = 0; x < GRIDSIZE; x++) {
    grid[x] = new Array(GRIDSIZE);
  }

  for (let x = 0; x < GRIDSIZE; x++) {
    for (let y = 0; y < GRIDSIZE; y++) {
      grid[x][y] = new Pathfinder (x, y);
    }
  }

  for (let x = 0; x < GRIDSIZE; x++) {
    for (let y = 0; y < GRIDSIZE; y++) {
      grid[x][y].checkNeighbors(grid);
    }
  }

    
}

function findPath () {

  // searching for A path
  if (cellsToCheck.length >= 0) { 

    let lowestValue = 0;
    for (let x = 0; x < cellsToCheck.length; x++) {
      if (cellsToCheck[x].f < cellsToCheck[lowestValue].f) {
        lowestValue = x;
      }
    }
    currentValue = cellsToCheck[lowestValue]; 

    if (currentValue === endingPoint) {
      console.log("I am Finish");
      noLoop();
    }

    // remove the values from the cellsToCheck and push it into the cellThatHaveBeenChecked
    removeFromArray(cellsToCheck, currentValue);
    cellThatHaveBeenChecked.push(currentValue);

    let neighborsToCheck = currentValue.neighborsToCheck;
    for (let x = 0; x < neighborsToCheck.length; x++) {
      let myNeighbors = neighborsToCheck[x];

      if (!cellThatHaveBeenChecked.includes(myNeighbors) && !myNeighbors.wall) {
        let gValue = currentValue.g + 1;

        if (cellsToCheck.includes(myNeighbors)) {
          if (gValue < myNeighbors.g) {
            myNeighbors.g = gValue;
          }
        }
        else {
          myNeighbors.g = gValue;
          cellsToCheck.push(myNeighbors);
        }
        // make an educated guess for the fastest path
        myNeighbors.h = checkDistance(myNeighbors, endingPoint);
        myNeighbors.f = myNeighbors.g + myNeighbors.h;
        myNeighbors.previous = currentValue;
      }
    }
  }

  // No Solution
  else {
    console.log("No Solution");
    noLoop();
  }
}

function displayPath() {
  // display grid
  for (let x = 0; x < GRIDSIZE; x++) {
    for (let y = 0; y < GRIDSIZE; y++) {
      grid[x][y].displayGrid(color(230,230,230));
    }
  }
  // Display the fastest path from startingPoint to finish
  for (let x = 0; x < cellThatHaveBeenChecked.length; x++) {
    cellThatHaveBeenChecked[x].displayGrid(color(231, 13, 143));
  }
  // change the color of the cells that have already been checked
  for (let x = 0; x < cellsToCheck.length; x++) {
    cellsToCheck[x].displayGrid(color(185, 19, 231));
  }

  // retrace the best path and display it
  path = [];
  let value = currentValue;
  while (value.previous) {
    path.push(value.previous);
    value = value.previous;
  }

  if (currentValue === endingPoint) {
    for (let x = 0; x < path.length; x++) {
      path[x].displayGrid(color(97, 38, 186));
    }
  }
}