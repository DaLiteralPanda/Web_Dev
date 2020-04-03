let canvas = document.querySelector("#myCanvas");
let context = canvas.getContext("2d");

function drawTriangle() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#FFFFFF";
  context.fillRect(0, 0, canvas.width, canvas.height);

  let height = 200 * Math.cos(Math.PI / 6);

  context.beginPath();
  context.moveTo(100, 300);
  context.lineTo(300, 300);
  context.lineTo(200, 300 - height);
  context.closePath();

  // the outline
  context.lineWidth = 10;
  context.strokeStyle = '#666666';
  context.stroke();

  // the fill color
  context.fillStyle = "#FFCC00";
  context.fill();
}
drawTriangle();
