let buttonPressed = false;

// Button object to store all of the button variable together
let myButton = {x: 0, y: 0, w: 0, h: 0, color: ""}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //Set the initial properties of myButton
  //subtract 1/2 the w and h from x and y to get true center
  myButton.w = 120;
  myButton.h = 40;
  myButton.x = width/2 - myButton.w/2;
  myButton.y = height/2 - myButton.h/2;
  myButton.color = "red";
}

function draw() {
  background(220);

  if (buttonPressed===false) {
    //Calls the myButton function in the draw loop
    drawButton();
  }
  if (buttonPressed === true){
    character();
  }
}

//build in p5js funciton for mouse reactions
function mousePressed() {

  //Checks if the mouse is within the x coordinates of the button
  if (mouseX > myButton.x && mouseX < (myButton.x + myButton.w)) {

    //Switch "true" out for a similar condition that checks y coordinates
    if(true) {
      buttonPressed = true;
    }
    
  }

}

//custom function that draws the button when called
function drawButton() {
  fill(myButton.color);
  rect(myButton.x, myButton.y, myButton.w, myButton.h);
}
function character(){
  translate(window/2, height/2);
    fill(92, 64, 51)
  circle(width/2, height/2, 100);
    fill(0,100,0)
  rect(200,490,300,150); //torso
    fill(0,0,255);
  rect(270,640,30,175); //left leg
   fill(0, 0, 255);
  rect(390,640,30,175); //right leg
    fill(92, 64, 51);
  rect(500,550,60,10); //right arm
    fill(92, 64, 51);
  rect(140,550,60,10); //left arm
    
    fill(255);
  circle(width/2.1, height/2, 15); //right eye
  circle(width/1.9, height/2, 15); //left eye
  rect(width/2.1,460 ,20,3)

  rect(270,790,30,25)
  rect(390,790,30,25)
}