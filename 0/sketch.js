let mImage;
let buttonClick;

function preload() {
  mImage = loadImage("./PietImage.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  print("Original size: ", mImage.width, " x ", mImage.height);
  
  if (mImage.width > width) {
    mImage.resize(width, 0);
  }
  if (mImage.height > height) {
    mImage.resize(0, height);
  }

  print("Scaled size: ", mImage.width, " x ", mImage.height);

buttonClick = createButton("Change Color");
buttonClick.mousePressed(changeBlue);

}

function draw() {
  background(255);
  image(mImage, 0, 0);

  mImage.loadPixels();

  for (let i = 0; i < mImage.pixels.length; i += 4) {
    mImage.pixels[i + 0] = rValue;
    mImage.pixels[i + 1] = bValue;
    mImage.pixels[i + 2] = gValue;

    maxColorValue = max(rValue, bValue, gValue);

    if (maxColorValue == redValue) { //if red, change to blue
      mImage.pixels[i + 0] = 0;
    } else if (maxColorValue == gValue) { //if green, change to yellow
      mImage.pixels[i + 1] = 255;
    }
  }

  mImage.updatePixels();

  buttonClick.position(width / 2, height / 2);
}

function changeBlue() {
  mImage.pixels[i + 1] = random(255);
}

