let oImage;
let mImage;
let buttonClick;
let randomColor;

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

  oImage.loadPixels();
  print("Scaled size: ", oImage.width, " x ", oImage.height);

mImage = oImage.get();

newColor();

buttonClick = createButton("Change Color");
buttonClick.mousePressed(newColor);
buttonClick.position(width / 2, height / 2);
buttonClick.style('font-size', '30px');
buttonClick.style('background-color', randomColor);

}

function newColor() {
  randomColor = color(random(255), random(255), random(255));
}

function draw() {
  background(255);

  mImage.loadPixels();
  let randomRed = red(randomColor);
  let randomGreen = green(randomColor);
  let randomBlue = blue(randomColor);

  for (let i = 0; i < mImage.pixels.length; i += 4) {
    rValue = oImage.pixels[i + 0];
    bValue = oImage.pixels[i + 1];
    gValue = oImage.pixels[i + 2];

    maxColorValue = max(rValue, bValue, gValue);

    if (maxColorValue == rValue && rValue > gValue * 3 && rValue > bValue * 3 ) { //if red, change to blue
      mImage.pixels[i + 0] = 19;
      mImage.pixels[i + 1] = 87;
      mImage.pixels[i + 2] = 238;
    } else if (maxColorValue == gValue && gValue > bValue * 2 && gValue > rValue * 2) { //if green, change to yellow
      mImage.pixels[i + 0] = 238;
      mImage.pixels[i + 1] = 227;
      mImage.pixels[i + 2] = 19;
    } else if (maxColorValue == bValue && bValue > rValue && bValue > gValue) {
      mImage.pixels[i + 0] = randomRed;
      mImage.pixels[i + 1] = randomGreen;
      mImage.pixels[i + 2] = randomBlue;
    }
  }

  mImage.updatePixels();

  image(mImage, 0, 0);

}

