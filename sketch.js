Array.prototype.sample = function () {
  return this[floor(random(0, this.length))];
};
const canvasWidth = 400;
const canvasHeight = 400;
const rows = 10;
const columns = 10;
const pixelWidth = canvasWidth / columns;
var colors;


function setup() {
  cnv = createCanvas(canvasWidth, canvasHeight);
  rectMode("center");
  noLoop();
  colors = [
    color("#80ff95"),
    color("#48cb66"),
    color("#ff9580"),
    color("#ffa7bf"),
    color("#ff618b"),
  ];
  noLoop();
}




function draw() {

  let y = 0;
  let x = 0;
  
  while(y < rows) {
    while(x < columns) {
      // random() will return a random 
      // number from0 to 1 (eg 0.232) 
      let v = random(250, 340);
      pixel(x, y, v);
      x = x + 1;
    }
    x = 0;
    y = y + 1;
  }
  push();
  strokeWeight(3);
  line(200, 0, 200, 400);
  line(0, 200, 400, 200);
  pop();
}

// Create your own pixel drawing function
// the third parameter `value` expects
// numbers in the range of 0-1 (eg 0.122)
// use the Reference documentation to
// find other drawing primitives (shapes)
function pixel(column, row, value) {
  let halfWidth = pixelWidth / 2;
  let pixelX = column * pixelWidth + halfWidth;
  let pixelY = row * pixelWidth + halfWidth;
  colorMode(HSB, 360, 100, 100);
  fill(colors.sample());
  rect(pixelX, pixelY, pixelWidth);
}


function keyPressed(){
 if (event.code === 'KeyS') { 
    saveCanvas("drawing.png");
    
  } else if (event.code === 'KeyR') {
    redraw();
  }
}

