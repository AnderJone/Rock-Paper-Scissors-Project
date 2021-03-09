//Base Game

let advScore = 0;
let wizScore = 0;
const text = document.querySelector('.TextWindow > p')
const stone = document.getElementById('stone')
const cloth = document.getElementById('cloth')
const blade = document.getElementById('blade')

function getWizChoice() {
    const choices = ['stone', 'cloth', 'blade'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

text.innerHTML = "Good morrow, humble Adventurer! I see you're looking a little worse for wear.";

stone.disabled = true;
cloth.disabled = true;
blade.disabled = true;  

setTimeout(() => {
    stone.disabled = false;
    cloth.disabled = false;
    blade.disabled = false;  
}, 18000);


let wizIntro = [ 
"Fear Not! This path leads to a village where you can rest your sorry self.",
"However, this dense wood is lonesome and does not make for good conversation.",
"So I offer a friendly match of... Stone, Cloth, Blade!",
"If you are the first to win five games, you may continue on your way.",
"I'll even let you try as many times as you like!",
"Ready? Choose your weapon!",
]

let introIndex = 0;

introInterval = setInterval(() => {
    text.innerHTML= wizIntro[introIndex];   
    introIndex++;
    if (introIndex == 6) {
        clearInterval(introInterval);
        return "Ready? Choose your weapon!";
    }

}, 3000)

function win() {
    advScore++;
    console.log('advWin ' + advScore)
    text.innerHTML = "Alas! You win this round! " + "I believe you have " + advScore + " and I have " + wizScore + "."
    checkVictory()
}
function lose() {
    wizScore++;
    console.log('wizwin ' + wizScore);
    text.innerHTML = "Heh, I win! " + "I believe you have " + advScore + " and I have " + wizScore + "."
    checkVictory()
}
function draw() {
    console.log("A tie!")
    text.innerHTML = "A tie! Let us play again!"
}

function advVictory() {
    text.innerHTML = "Oh Drat! Well Played. Farewell, Adventurer!" 
    clearInterval(animInt);
    setInterval(animateAdvWalk, 7000/30);
    stone.disabled = true;
    cloth.disabled = true;
    blade.disabled = true;
    setTimeout(() => {
        alert("Thank you so much for playing my game! If you want to give it another go, just reload the page!")
    }, 5000);
    setTimeout(() => {
        text.innerHTML = "Are you still here? Quick, user! Reload the page! I demand a rematch!"
    }, 15000);
}


function wizVictory() {
    text.innerHTML = "Woot! I win! No worries though Adventurer. Care to play again?"
    advScore = 0;
    wizScore = 0;
}

function checkVictory() {
    if (advScore === 5) {
        advVictory()
    } else if (wizScore === 5) {
        wizVictory()
    } else {
        null
    }
}

function game(advChoice) {
    const wizChoice = getWizChoice();
    switch (advChoice + wizChoice) {
        case 'stoneblade':
        case 'clothstone':
        case 'bladecloth':
            win();
            break;
        case 'stonecloth':
        case 'clothblade':
        case 'bladestone':
            lose();
            break;
        case 'stonestone':
        case 'clothcloth':
        case 'bladeblade':
            draw();
    }
}

stone.addEventListener('click', function() {
    game('stone')
})
cloth.addEventListener('click', function() {
    game('cloth')
})
blade.addEventListener('click', function() {
    game('blade')
})

















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


function animateAdv(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawAdv(image.adv, advWidth * advFrameX, advHeight * advFrameY, advWidth, 
    advHeight, advX, advY, advWidth, advHeight);
    if (advFrameX < 2) advFrameX++;
    else advFrameX = 0;
}

animInt = setInterval(animateAdv, 10000/30);

function animateAdvWalk(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawAdv(image.adv, advWidth * advFrameX, advHeight * advFrameY, advWidth, 
    advHeight, advX, advY, advWidth, advHeight);
    //Adventurer Walk
    if (advFrameX < 6) advFrameX++;
    else advFrameX = 3;
    //Adventurer Movement
    if (advX < advWidth + canvas.width) advX += advspeed;
}
    //if you want to loop
    /*
    else advX = 250;
}  */
















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

canvasWiz.onload = setInterval(animateWiz, 15000/30);


function animateWiz(){
    ctxWiz.clearRect(0,0,canvasWiz.width, canvasWiz.height);
    drawWiz(imagewiz.wiz, wizWidth * wizFrameX, wizHeight * wizFrameY, wizWidth, 
    wizHeight, wizX, wizY, wizWidth, wizHeight);
    if (wizFrameX < 2) wizFrameX++;
    else wizFrameX = 0;
}

