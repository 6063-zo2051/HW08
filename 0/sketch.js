let oImage;
let mImage;
//let buttonClick;

function preload() {
  oImage = loadImage("./PietImage.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  print("Original size: ", oImage.width, " x ", oImage.height); //original image size
  
  if (oImage.width > width) { //resize image width to window width
    oImage.resize(width, 0);
  }
  if (oImage.height > height) { //resize image height to window height
    oImage.resize(0, height);
  }

  print("Scaled size: ", oImage.width, " x ", oImage.height);

oImage.loadPixels
mImage = oImage.get();

//buttonClick = createButton("Change Color");
//buttonClick.mousePressed(changeBlue);

}

function draw() {
  background(255);
  image(mImage, 0, 0);

  mImage.loadPixels();

  for (let i = 0; i < mImage.pixels.length; i += 4) {
    rValue = oImage.pixels[i + 0];
    bValue = oImage.pixels[i + 1];
    gValue = oImage.pixels[i + 2];

    maxColorValue = max(rValue, bValue, gValue);

    if (maxColorValue == rValue && rValue == gValue * 3 ) { //if red, change to blue
      mImage.pixels[i + 0] = 19;
      mImage.pixels[i + 1] = 87;
      mImage.pixels[i + 2] = 238;
    } else if (maxColorValue == gValue) { //if green, change to yellow
      mImage.pixels[i + 0] = 238;
      mImage.pixels[i + 1] = 227;
      mImage.pixels[i + 2] = 19;
    }
  }

  mImage.updatePixels();

  // buttonClick.position(width / 2, height / 2);
}

//function changeBlue() {
 // mImage.pixels[i + 1] = random(255);
//}

