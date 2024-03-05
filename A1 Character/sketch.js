// A1 Character
// Kenji Obena
// 29 Feb 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

function draw() {
  background("green");
  translate(window/2, height/2);
    fill(92, 64, 51)
  circle(width/2, height/2, 100);
    fill(0)
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

