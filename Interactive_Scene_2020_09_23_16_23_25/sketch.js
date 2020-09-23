// Abdul Raffey
// Tuesday September 22, 2020
// Interactive Scene
// 
// Controls - Click the target for it to move -- Use the Mouse Wheel to increase or decrease difficulty
// -- Press the "R" on the kryboard to restart the game
// 
// For the purpose of the game there is a Score limit, once reached the game will be over
// Also the Target can partially go over the eage of the screen, As this is a target practice game
// 
// Expra for Expert - Mouse wheel as an input

let cnv;
let circleX, CircleY, circleRadius;
let score, displayScreen;
let lifesLeft;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);

// Sets all necessary variables for the game
  displayScreen = "startScreen";
  circleRadius = 30;
  circleX = width / 2;
  circleY = height / 2;
  score = 0;
  lifesLeft = 3;

//   lets the player use the Mouse Wheel as an input
  cnv.mouseWheel(changeBallSize);
}

function draw() {
  runGame();
}

function runGame() {
// controls what the screen the player is on and sets up in game displays like the score and the Target
  
  if (displayScreen === "startScreen") {
    background("white");
    showStartScreen();
  } 
  
  else if (displayScreen === "gameScreen") {
    background("black");
    fill("red");
    displayScore();
    displayBall();
    displayLifesLeft();

    if (score > 100) {
      displayScreen = "endScreen";
    }
  } 
  
  else if (displayScreen === "endScreen") {
    background("white");
    gameOver();
  }
}

function showStartScreen() {
//   controls the Start screen text, its style, location, and size
  
  textAlign(CENTER);
  textStyle(BOLDITALIC);
  textSize(18);
  text("Press any Key to Start", width / 2, height / 2);
}

function displayBall() {
// Cntrols how the targets look and its location
  
  noStroke();
  ellipse(circleX, circleY, circleRadius * 2, circleRadius * 2);
}

function displayScore() {
//   Displays the Score for the player and how it looks
  
  textSize(14);
  text('Score: ' + score, 30, 20);
}

function displayLifesLeft() {
//   Displays the lives the player has left and how it looks
  
  textSize(14);
  text('Lifes Left: ' + lifesLeft, 40, 40);
}

function countScore() {
//   controls how many points the player get, based on target size
  
  if (circleRadius <= 10) {
    return score += 4;
  } 
  
  else if (circleRadius > 11 && circleRadius <= 40) {
    return score += 2;
  } 
  
  else if (circleRadius > 41 && circleRadius <= 100) {
    return score += 1;
  }
}

function changeBallSize(event) {
//   Changes the size of the target

  if (event.deltaY < 0) {

    if (circleRadius < 100) {
      circleRadius += 10;
    }
  } 
  
  else {
    if (circleRadius > 10) {
      circleRadius -= 10;
    }
  }
}

function isMouseInsideTarget() {
//   Checks to see if the player hit the target
  
  return (dist(circleX, circleY, mouseX, mouseY)) < circleRadius;
}

function mouseClicked() {
//   check to see if the target is hit
  
  if (displayScreen === "gameScreen") {
    if (isMouseInsideTarget()) {
      moveTarget();
      countScore();
    } 
    
    else {
      scoreLost();
      livesLeft();
    }
  }
}

function keyPressed() {
//   changes the Display based based on input
  
  if (displayScreen === "startScreen") {
    displayScreen = "gameScreen";
  } 
  
  else if (displayScreen === "endScreen") {
    if (key === "r") {
      restartGame();
    }
  }
}

function moveTarget() {
//   it moves the target
  
  circleX = random(windowWidth);
  circleY = random(windowHeight);
}

function gameOver() {
// controls the game over screen text, its style, location, and size
  
  textAlign(CENTER);
  textStyle(BOLDITALIC);
  textSize(18);
  fill("Black");
  text("Game Over", width / 2, height / 2);
  text("Press R to restart Game", width / 2, height / 2 + 25);
}

function restartGame() {
//   restarts the game and changes displays
  
  setup();
  displayScreen = "gameScreen";
}

function livesLeft() {
//   Counts how many lives the plays has left
  
  if (lifesLeft < 0) {
    displayScreen = "endScreen";
  }
}

function scoreLost() {
  // Counts how many lives the plays has left and decrease score
  score -= 1;
  lifesLeft -= 1;
}