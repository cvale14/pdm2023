function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0);
  fill(400, 600, 50)
  var scalarX = 80;
  var scalarY = 40;
  arc(215, 200, 350, 350, 0, PI + QUARTER_PI * 3);

  noStroke()
  fill(500, 85, 100)
  square(425, 40, 350);
  square(425, 10, 350, 20);

  fill(255)
  circle(700, 100, 130);
  circle(500, 100, 130);
  fill(0, 0, 250)
  circle(700, 100, 100);
  circle(500, 100, 100);





}