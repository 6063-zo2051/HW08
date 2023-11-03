let song;
let peaks;
let lineX = 0;
let buttonClick;
let isPlaying;

function preload() {
  song = loadSound("./hotel.mp3", loaded);
}

function loaded() {
  if (song.isLoaded()) {
    peaks = song.getPeaks();
    song.play();
  }
}

function setup() {
  createCanvas(400, 400);

buttonClick = createButton("Create Round");
buttonClick.mousePressed(playButton);
buttonClick.position(width / 4, height / 2.25);
buttonClick.style('font-size', '30px');
}

function draw() {
  background(220, 20, 120);

  if ( peaks ) {
    let t = map(song.currentTime(), 0, song.duration(), 0, width);
    lineX = lerp(lineX, t, 0.1);

    stroke(0);
    strokeWeight(5);
    line(lineX, 0, lineX, height);
  }
}

function playButton () {
  if (isPlaying) {
    song.pause();
  } else {
    song.play();
  }
}



