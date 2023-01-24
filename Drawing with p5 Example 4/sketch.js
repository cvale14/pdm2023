function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0, 0, 180);
  strokeWeight(6); // Thicker
  stroke(255,255,255)
  fill(0, 175, 0)
  circle(290, 250, 300);
 
  fill(225, 0, 0)
    push();
    translate(width * 0.8, height * 0.5);
    star(-180, -40, 160, 60, 5);
    pop();
    function star(x, y, radius1, radius2, npoints) {
      let angle = TWO_PI / npoints;
      let halfAngle = angle / 2.0;
      beginShape();
      for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
      }
      endShape(CLOSE);
    }
    
  }
  
 