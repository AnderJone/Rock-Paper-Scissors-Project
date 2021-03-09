//Adventurer Idle
const canvas = document.getElementById('cananimAdv');
const ctx = canvas.getContext('2d');
canvas.width = 690;
canvas.height = 345;

const image = {};
image.adv = new Image();
image.adv.src = "Character Animations--adv.png";


const advWidth = 115;
const advHeight = 345;
let advFrameX = 0;
let advFrameY = 0;
let advX = 250;
let advY = 40;
let advspeed = 30;

function drawAdv(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

setInterval(animateAdv, 10000/30);

function animateAdv(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawAdv(image.adv, advWidth * advFrameX, advHeight * advFrameY, advWidth, 
    advHeight, 250, 40, advWidth, advHeight);
    if (advFrameX < 2) advFrameX++;
    else advFrameX = 0;
}


//Adventurer Walk
//window.onload = setInterval(animateAdvWalk, 8000/30);
function animateAdvWalk(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawAdv(image.adv, advWidth * advFrameX, advHeight * advFrameY, advWidth, 
    advHeight, advX, advY, advWidth, advHeight);
    //Adventurer Walk
    if (advFrameX < 6) advFrameX++;
    else advFrameX = 3;
    //Adventurer Movement
    if (advX < advWidth + canvas.width) advX += advspeed;
    else advX = 250;
}

//Base Game

