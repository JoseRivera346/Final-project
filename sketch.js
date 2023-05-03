//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(255,216,230); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/200,height/200,20,20); // center of canvas, 20px dia
  //book pages
  fill('white')
  noStroke();
  rect(170,400,150,55);
  //book cover top
  fill('red')
  ellipse(245,404,160,20);
  //book cover spine

fill('black')
stroke(127);
strokeWeight(10)
line(30, 20, 85, 20);
stroke(127);
line(85, 20, 85, 75);
stroke(127);
line(85, 75, 30, 75);
}
