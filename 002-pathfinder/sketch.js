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
//  g(n) = time from start to finish
//  h(n) = IDK ??

const GRIDSIZE = 50;
let grid;

let openSet = [];
let closedSet = [];
let start;
let end;
let cellWidth, cellHeight;
let path = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    cellWidth = width / grid[0].lenght;
    cellHeight = height / grid.length;

    // making an 2D array
    // for (let i = 0; i < GRIDSIZE; i++) {
    //     grid[i] = new Array(GRIDSIZE);
    // }

    generateGrid();
    console.log(grid);
}

function draw() {

    if (openSet.length > 0) {
        // keep searching 

        let lowestValue = 0;
        for (let i = 0; i < openSet.length; i++) {
            if (openSet[i].f < openSet[lowestValue].f) {
                lowestValue = i;
            }
        }
        let currentValue = openSet[lowestValue]; 

        if (currentValue === end) {
            // find the path
            path = [];
            let temp = currentValue;
            while (temp.previous) {
                path.push(temp.previous);
                temp = temp.previous;
            }
            noLoop();
            console.log("DONE");
        }

        // remove the value fron the openSet and push it into the closedSet
        removeFromArray(openSet, currentValue);
        closedSet.push(currentValue);

        let neighbors = currentValue.neighbors;
        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];

            if (!closedSet.includes(neighbor)) { // what does include mean
                let tempG = currentValue.g + 1;

                if (openSet.includes(neighbor)) {
                    if (tempG < neighbor.g) {
                        neighbor.g = tempG;
                    }
                }
                else {
                    neighbor.g = tempG;
                    openSet.push(neighbor);
                }
                // educated guess
                neighbor.h = heuristic(neighbor, end);
                neighbor.f = neighbor.g = neighbor.h;
                neighbor.previous = currentValue;
            }
        }
    }

    else {
        // No Solution
    }

    background(0);

    for (let i = 0; i < GRIDSIZE; i++) {
        for (let j = 0; j < GRIDSIZE; j++) {
            grid[i][j].show(color(255));
        }
    }
    // display closed array
    for (let i = 0; i < closedSet.length; i++) {
        closedSet[i].show(color(255, 0, 0));

    }
    // display open array
        for (let i = 0; i < openSet.length; i++) {
        openSet[i].show(color(0, 255, 0));
    }

        for (let i = 0; i < path.length; i++) {
        path[i].show(color(0, 0, 255));
    }
}

// look through the array and remove a value
function removeFromArray(array, value) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === value) {
            array.splice(i, 1);
        }
    }
}

function heuristic(a , b) {
    let distance = abs(a.i - b.i) + abs(a.j - b.j);
    return distance;
}

class Spot {
    constructor(i, j) {
        this.i = i;
        this.j = j;

        this.f = 0;
        this.g = 0;
        this.h = 0;

        this.neighbors = [];
        this.previous = undefined;

        this.show = function(color) {
            fill(color);
            rect(this.i * cellWidth, this.j * cellHeight, cellWidth - 1, cellHeight - 1);
        //}

        this.addNeighbors = function(grid) {
            let i = this.i;
            let j = this. j;
            // Check neighbors
            if (i < GRIDSIZE - 1) {
                this.neighbors.push(grid[i + 1] [j]);
            }

            if (i > 0) {
                this.neighbors.push(grid[i - 1] [j]);
            }

            if (j < GRIDSIZE - 1) {
                this.neighbors.push(grid[i] [j + 1]);
            }
            
            if (j > 0) {
                this.neighbors.push(grid[i] [j - 1]);
            }
        }

    }
}

function generateGrid() {
    for (let i = 0; i < GRIDSIZE; i++) {
        for (let j = 0; j < GRIDSIZE; j++) {
            grid[i][j] = new Spot (i, j); // is new used much like a let to Define funtions
        }
    }

    for (let i = 0; i < GRIDSIZE; i++) {
        for (let j = 0; j < GRIDSIZE; j++) {
            grid[i][j].addNeighbors(grid);
        }
    }

    start = grid[0][0]; // start point
    end = grid[25][23]; // end point

    openSet.push(start);
}