var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var angle = 0;
var xCoord = 0;
var yCoord = 0;
var speed = 5;
var shot;

function clickFunction() {
    "use strict";
    if (document.getElementById("Para1").innerHTML == "Paragraph") {
        document.getElementById("Para1").innerHTML = "Butts";
    } else {
        document.getElementById("Para1").innerHTML = "Paragraph";
    }

}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function clickCanvas(e) {
    var canvasRect = canvas.getBoundingClientRect();
    xCoord = Math.floor((e.clientX - canvasRect.left) / (canvasRect.right - canvasRect.left) * canvas.width);
    yCoord = Math.floor((e.clientY - canvasRect.top) / (canvasRect.bottom - canvasRect.top) * canvas.height);
    document.getElementById("coordText").innerHTML = "Coordinates: " + "(" + xCoord + "," + yCoord + ")";
    shootCircle();
}

function Circle(x,y,radius)
{
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function update()
{
    if(shot != undefined && shot.y > 0)
    {
        shot.y -= speed;
    }
    else
    {
        clearCanvas();
        shot = undefined;
    }
}

function draw()
{
    drawCircle();
}

function animate()
{
    if(shot != undefined)
    {
        update();
        draw();
        requestAnimationFrame(animate);
    }

}

function shootCircle()
{
    shot = new Circle(xCoord,yCoord,15);
    drawCircle();

   requestAnimationFrame(animate);
}

function drawCircle() {
    if(shot != undefined)
    {
        clearCanvas();
        ctx.beginPath();
        ctx.arc(shot.x, shot.y, shot.radius, 0, (2.0 * Math.PI), false);
        ctx.closePath();
        ctx.fillStyle = "green";
        ctx.fill();
    }
}
