// Setting up the <canvas> Element:
// First, you need to create a <canvas> element in your HTML file with an id attribute to reference it from JavaScript:
<canvas id="myCanvas" width="400" height="200"></canvas>
// Accessing the Canvas Element in JavaScript:
// You can access the <canvas> element using its id attribute and the getContext() method, which returns a drawing context:
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
// Drawing Shapes and Graphics:
// Once you have the canvas context (ctx), you can use its methods to draw various shapes, paths, and text.
// 1. Drawing Rectangles:
// Draw a filled rectangle
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 50); // (x, y, width, height)

// Draw a stroked rectangle
ctx.strokeStyle = 'blue';
ctx.lineWidth = 2;
ctx.strokeRect(150, 50, 100, 50); // (x, y, width, height)
// 2. Drawing Paths (Lines and Shapes):
// Start a new path
ctx.beginPath();
ctx.moveTo(250, 50); // Move to (x, y)
ctx.lineTo(300, 100); // Draw a line to (x, y)
ctx.lineTo(200, 100); // Draw another line to (x, y)
ctx.closePath(); // Close the path to create a shape

// Fill the shape
ctx.fillStyle = 'green';
ctx.fill();

// Stroke the path (optional)
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.stroke();
// 3. Drawing Circles and Arcs:
// Draw a filled circle
ctx.beginPath();
ctx.arc(100, 150, 30, 0, Math.PI * 2); // (x, y, radius, startAngle, endAngle)
ctx.fillStyle = 'orange';
ctx.fill();

// Draw a stroked arc
ctx.beginPath();
ctx.arc(200, 150, 30, 0, Math.PI * 1.5); // (x, y, radius, startAngle, endAngle)
ctx.strokeStyle = 'purple';
ctx.lineWidth = 3;
ctx.stroke();
// 4. Drawing Text:
// Draw filled text
ctx.font = '24px Arial';
ctx.fillStyle = 'black';
ctx.fillText('Hello, Canvas!', 50, 180); // (text, x, y)

// Draw stroked text
ctx.font = 'bold 30px Times New Roman';
ctx.strokeStyle = 'blue';
ctx.lineWidth = 2;
ctx.strokeText('Stroked Text', 200, 180); // (text, x, y)
// 5. Clearing the Canvas:
// You can clear the entire canvas or a specific region using clearRect() method:
// Clear the entire canvas
ctx.clearRect(0, 0, canvas.width, canvas.height); // (x, y, width, height)