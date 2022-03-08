let cx = document.querySelector("canvas").getContext("2d");
// trapezoid
function trapezoid(cx, x, y, width, height, indent) {
  cx.beginPath();
  //Move to top-left corner
  cx.moveTo(x + indent, y);
  //Line to top-right corner
  cx.lineTo(x - indent + width, y);
  //Line to bottom-right corner
  cx.lineTo(x + width, y + height);
  //Line to bottom-left corner
  cx.lineTo(x, y + height);
  //Line to top-left corner
  cx.closePath();
  cx.stroke();
}
// red diamond
function diamond(cx, x, y, side, color) {
  cx.translate(x + side / 2, y + side / 2);
  cx.rotate(Math.PI / 4);
  cx.translate(-x - side / 2, -y - side / 2);
  cx.fillStyle = color;
  cx.fillRect(x, y, side, side);
}
// zigzagging line
function zigzag(cx, x, y, width, height, num) {
  cx.beginPath();
  cx.moveTo(x, y);
  // height of each zigzag
  let s = height / num;
  for (let i = 0; i < num; i++) {
    cx.lineTo(x + width, y + i * s + s / 2);
    cx.lineTo(x, y + i * s + s);
  }
  cx.stroke();
}
// spiral
function spiral(cx, x, y, width, segments) {
  cx.beginPath();
  cx.moveTo(x + width / 2, y + width / 2);
  // weight of each spiral
  let inc = Math.pow(Math.PI, 2) / segments;
  let angle = 0;
  for (let i = 0; i < segments; i++) {
    let points = [];
    angle += inc;
    points[0] = Math.cos(angle);
    points[1] = Math.sin(angle);
    angle += inc;
    points[2] = Math.cos(angle);
    points[3] = Math.sin(angle);
    points = points.map((x) => (x * i + width) / 2);
    cx.lineTo(x + points[0], y + points[1]);
    cx.lineTo(x + points[2], y + points[3]);
  }
  cx.stroke();
}
// yellow star
function star(cx, x, y, width, point) {}
trapezoid(cx, 0, 20, 150, 75, 30);
diamond(cx, 200, 20, 80, "red");
zigzag(cx, 300, 0, 100, 100, 4);
spiral(cx, 400, 0, 40, 100);
