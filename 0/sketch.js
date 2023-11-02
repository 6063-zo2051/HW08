let img;

function preload() {
  img = loadImage('PietImage.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);

replaceColors(color(255, 0, 0), color(0, 255, 0));
replaceColors(color(255, 255, 0), color(0, 0, 255));
replaceColors(color(0, 0, 255), color(255, 255, 0));

image(img, 0, 0);
}

function draw() {
}

function replaceColors (targetColor, replacementColor) {
  img.loadPixels();

  for (let i = 0; i < pixels.length; i += 4) {
    let r = pixels[i];
    let g = pixels[i + 1];
    let b = pixels[i + 2];

    if (colorMatches(targetColor, color(r, g, b))) {
      img.pixels[i] = red(replacementColor);
      img.pixels[i+1] = green(replacementColor);
      img.pixels[i+2] = blue(replacementColor);
    }
  }

  img.updatePixels();
}

function colorMatches (color1, color2) {
return red(color1) === red(color2) && green(color1) === green(color2) && blue(color1) === blue(color2);
}
