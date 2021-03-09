//wizard
const canvasWiz = document.getElementById('cananimWiz');
const ctxWiz = canvasWiz.getContext('2d');
canvasWiz.width = 690;
canvasWiz.height = 345;

const imagewiz = {};
imagewiz.wiz = new Image();
imagewiz.wiz.src = "Character Animations--wiz.png";


const wizWidth = 230;
const wizHeight = 345;
let wizFrameX = 0;
let wizFrameY = 0;
let wizX = 410;
let wizY = 0;

function drawWiz(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctxWiz.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

window.onload = setInterval(animateWiz, 15000/30);


function animateWiz(){
    ctxWiz.clearRect(0,0,canvasWiz.width, canvasWiz.height);
    drawWiz(imagewiz.wiz, wizWidth * wizFrameX, wizHeight * wizFrameY, wizWidth, 
    wizHeight, wizX, wizY, wizWidth, wizHeight);
    if (wizFrameX < 2) wizFrameX++;
    else wizFrameX = 0;
}

