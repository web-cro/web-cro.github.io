// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let triangleVertices = [
  {x: 800, y: 100},
  {x: 300, y: 750},
  {x: 1300, y: 750}
];

let levelsDeep = 1;

function mousePressed() {
  levelsDeep ++;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  sierpinski(triangleVertices, levelsDeep);
}


function sierpinski(points, depth) {
  let color = ["red", "green", "blue", "white", "yellow"];
  fill(color[depth % color.length]);

  triangle(points[0].x, points[0].y, 
           points[1].x, points[1].y, 
           points[2].x, points[2].y);
  // exit
  if (depth > 0) {
    sierpinski([points[0],
               getMidpoint(points[0], points[1]),
               getMidpoint(points[0], points[2])],
               depth - 1);

    sierpinski([points[0],
                getMidpoint(points[0], points[1]),
                getMidpoint(points[1], points[2])],
                depth - 1);

    sierpinski([points[0],
                  getMidpoint(points[0], points[2]),
                  getMidpoint(points[1], points[2])],
                  depth - 1);
  }
}


function getMidpoint(point1, point2) {
  let xDeifference = point1.x + point2.x;
  let yDeifference = point1.y + point2.y;
  let midpoint = {s: xDeifference / 2, y: yDeifference / 2};
  return midpoint;
}