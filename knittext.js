const canvWidth = 1400;
const canvHeight = 1400;

let gridWidth = 25;
let gridHeight = 25;
let numStitches = 55;
let ratio = gridWidth / gridHeight;
let numRows = numStitches * ratio;

let myText = "your text here";
let inp;
let myFont;

let button;

function preload() {
  myFont = loadFont("Quinquefive-ALoRM.ttf");
}

function setup() {
  createCanvas(canvWidth, canvHeight);

  background("grey");
  inp = createInput("");
  inp.position(0, 0);
  inp.size(100);
  inp.input(myInputEvent);
  textFont(myFont);
  textLeading(6 * gridHeight);
  textSize(5 * gridWidth);
  textAlign(CENTER, CENTER);
  button = createButton('click to save');
  button.position(150, 0);
  button.mousePressed(saveImage);
}

function myInputEvent() {
  // console.log('you are typing: ', this.value());
  myText = this.value();
}

function saveImage(){
  save("myimage.png");
}

function drawGrid() {
  push();
  var drawThick = false;

  for (y = 0; y < numRows; y = y + 1) {
    for (x = 0; x < numStitches; x = x + 1) {
      noStroke();
      drawThick = x % 5 == 0;
      stroke("black");
      strokeWeight(1);
      if (drawThick) {
        strokeWeight(3);
      }
      line(x * gridWidth, 0, x * gridWidth, height);
    }
    line(x * gridWidth, 0, x * gridWidth, height);
    drawThick = y % 5 == 0;
    stroke("black");
    strokeWeight(1);
    if (drawThick) {
      strokeWeight(3);
    }
    line(0, y * gridHeight, width, y * gridHeight);
  }
  noStroke();
  fill(220);
  rect(0, y * gridHeight, width, height);
  rect(x * gridWidth, 0, width, height);
}

function draw() {
  background(220);
  fill(100);
  textFont(myFont);
  textAlign(CENTER, CENTER);
  text(myText, 0, -textAscent() / 2, canvWidth, canvHeight);
  drawGrid();
}
