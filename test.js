var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var circleRadius = 15;

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
    var xCoord = Math.floor((e.clientX - canvasRect.left) / (canvasRect.right - canvasRect.left) * canvas.width);
    var yCoord = Math.floor((e.clientY - canvasRect.top) / (canvasRect.bottom - canvasRect.top) * canvas.height);
    document.getElementById("coordText").innerHTML = "Coordinates: " + "(" + xCoord + "," + yCoord + ")";
    drawCircle(xCoord, yCoord, ctx);
}

function drawCircle(xcoord, yCoord, canvasContext) {
    clearCanvas();
    canvasContext.beginPath();
    canvasContext.arc(xcoord, yCoord, circleRadius, 0, (2.0 * Math.PI));
    canvasContext.closePath();
    canvasContext.fillStyle = "green";
    canvasContext.fill();
}
