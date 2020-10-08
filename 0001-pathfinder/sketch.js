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

const GRIDSIZE = 45;
let grid = new Array(GRIDSIZE); // How does "New Array" work?

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
  startingPoint = grid[0][0]; // make it change able
  startingPoint.wall = false;
  // endingPoint point
  endingPoint = grid[44][44]; // make it change able
  endingPoint.wall = false;

  cellsToCheck.push(startingPoint);

  console.log(grid);
}

function draw() {
  findPath();
  background(0);
  displayPath();
}

// look through the array and remove a cells that we have already visted
function removeFromArray(array, value) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      array.splice(i, 1);
    }
  }
}

// check the distance between the startingPointing and endingPointing points
function checkDistance(a , b) {
  let distance = abs(a.i - b.i) + abs(a.j - b.j);
  return distance;
}

class Pathfinder {
  constructor(i, j) {
    this.i = i;
    this.j = j;

    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.neighborsToCheck = [];
    this.previous = undefined;
    this.wall = false;

    if (random(1) <= 0.3) {
      this.wall = true;
    }
  }
  // create and color rects to use when display grid
  displayGrid(color) {
    //strokeWeight(0);
    noStroke();
    fill(color);
    if (this.wall) {
      fill(0);
    }
    rect(this.i * cellWidth, this.j * cellHeight, cellWidth - 1, cellHeight - 1);
  }

  checkNeighbors(grid) {
    let i = this.i;
    let j = this. j;
    // Check neighbors
    if (i < GRIDSIZE - 1) {
      this.neighborsToCheck.push(grid[i + 1] [j]);
    }

    if (i > 0) {
      this.neighborsToCheck.push(grid[i - 1] [j]);
    }

    if (j < GRIDSIZE - 1) {
      this.neighborsToCheck.push(grid[i] [j + 1]);
    }
    
    if (j > 0) {
      this.neighborsToCheck.push(grid[i] [j - 1]);
    }
  }
}

// A grid
function generateGrid() {
  cellWidth = width / GRIDSIZE;
  cellHeight = height / GRIDSIZE;

  // making an 2D array
  for (let i = 0; i < GRIDSIZE; i++) {
    grid[i] = new Array(GRIDSIZE);
  }

  for (let i = 0; i < GRIDSIZE; i++) {
    for (let j = 0; j < GRIDSIZE; j++) {
      grid[i][j] = new Pathfinder (i, j); // is new used much like a let to Define funtions
    }
  }

  for (let i = 0; i < GRIDSIZE; i++) {
    for (let j = 0; j < GRIDSIZE; j++) {
      grid[i][j].checkNeighbors(grid);
    }
  }

    
}

function findPath () {

  // keep searching for A path
  if (cellsToCheck.length > 0) { 

    let lowestValue = 0;
    for (let i = 0; i < cellsToCheck.length; i++) {
      if (cellsToCheck[i].f < cellsToCheck[lowestValue].f) {
        lowestValue = i;
      }
    }
    currentValue = cellsToCheck[lowestValue]; 

    if (currentValue === endingPoint) {
      console.log("I am Finish");
      noLoop();
    }

    // remove the value fron the cellsToCheck and push it into the cellThatHaveBeenChecked
    removeFromArray(cellsToCheck, currentValue);
    cellThatHaveBeenChecked.push(currentValue);

    let neighborsToCheck = currentValue.neighborsToCheck;
    for (let i = 0; i < neighborsToCheck.length; i++) {
      let myNeighbors = neighborsToCheck[i];

      if (!cellThatHaveBeenChecked.includes(myNeighbors) && !myNeighbors.wall) { // what does include mean
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
  for (let i = 0; i < GRIDSIZE; i++) {
    for (let j = 0; j < GRIDSIZE; j++) {
      grid[i][j].displayGrid(color(230,230,230));
    }
  }
  // Display the fastest path from startingPoint to finish
  for (let i = 0; i < cellThatHaveBeenChecked.length; i++) {
    cellThatHaveBeenChecked[i].displayGrid(color(231, 13, 143));
  }
  // change the color of the cells that have already been checked
  for (let i = 0; i < cellsToCheck.length; i++) {
    cellsToCheck[i].displayGrid(color(185, 19, 231));
  }

  // find the path
  path = [];
  let value = currentValue;
  while (value.previous) {
    path.push(value.previous);
    value = value.previous;
  }

  if (currentValue === endingPoint) {
    for (let i = 0; i < path.length; i++) {
      path[i].displayGrid(color(97, 38, 186));
    }
  }
}

// function toggleCell(cellX, cellY) {
//   if (cellX >= 0 && cellX < GRIDSIZE && cellY >= 0 && cellY < GRIDSIZE) {
//     if (grid[cellY][cellX] === 0) {
//       grid[cellY][cellX] = 1;
//     }
//     else {
//       grid[cellY][cellX] = 0;
//     }
//   }
// }

// function mousePressed() {
//   let cellX = floor(mouseX / cellWidth);
//   let cellY = floor(mouseY / cellHeight);

//   toggleCell(cellX, cellY);
// }