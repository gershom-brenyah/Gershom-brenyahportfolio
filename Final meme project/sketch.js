let Axespongebob;



let w = 750;
let h = 950;
let scl = 20;
let cols;
let rows;
let yoff = 0.0;
let margin = 50;

function preload(){
    AxespongebobImg = loadImage('Axespongebob.png');
    
}

function setup() {
  
  createCanvas(400, 400);
  
  

  
  cols = (w - margin * 2) / scl;
  rows = (h - margin * 2) / scl;
  
    
}


function draw() {
    console.log(mouseX+ ", " + mouseY)
  
  background(50, 150, 200);
  image(AxespongebobImg, 72, 125, 250, 150 );
  

  textSize(17);
  text('Freshman after gym class using half a can of axe', 20, 30)

    let xoff = 0.0;

  
  for (let y = 0; y <= h; y += scl) {
    strokeWeight(1.5);
    stroke(50, 250, 100);
    noFill();
    
    beginShape();
    
    for (let x = 0; x <= w; x += scl) {
    	let noiseScale = map(noise(x * xoff, yoff), 0, 1, -20, 20)
      
			curveVertex(x + margin, (y + noiseScale) + margin);
      xoff += 0.00002;
    }
    
    yoff += 0.0001;

    endShape();
  }
  

  //drawSquiggle(7, 150)
  //drawSquiggle(10,225)
  //drawSquiggle(4, 100)

 
//}

//function drawSquiggle(x, y) {
	// draw squiggle
	//noStroke();
	//fill(10, 250, 100);
	//beginShape();
	//curveVertex(50, 75);
	//curveVertex(50, 75 + y);
	//curveVertex(75 + x, 25 + y);
	//curveVertex(100 + x, 75 + y);
	//curveVertex(125 + x, 25 + y);
	//curveVertex(150 + x, 75 + y);
	//curveVertex(175 + x, 50 + y);
	//curveVertex(175 + x, 50 + y);
	//endShape();
}