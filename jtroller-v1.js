const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game settings
const stickFigureWidth = 100;
const stickFigureHeight = 298;
const waterColor = '#7EC8E3';
const waveColor = '#6FAFD8';
const waveEffectStrength = 10;
const waveSpeed = 0.05;
const numberOfWaveRows = 3;

// Stick figure image
const stickFigure = new Image();
stickFigure.src = 'jtroller.png';

// Background image
const backgroundImage = new Image();
backgroundImage.src = 'canvas.png';
let backgroundImageLoaded = false;

// Game variables
let logAngle = 0;
let logAngularVelocity = 0;
let gameOver = false;
let timer = 0;
let paused = false;
let lastRenderTime = 0;
let difficulty = 0;
let gameStarted = false;
let waterOffset = 0;
let imageLoaded = false;
let highScore = 0;
let currentScore = 0;
let firstGame = true;

backgroundImage.onload = function() {
    backgroundImageLoaded = true;
    if (!gameStarted) {
        drawBackground();
    }
};

function resetGame() {
    logAngle = 0;
    logAngularVelocity = 0;
    gameOver = false;
    timer = 0;
    difficulty = 0;
    waterOffset = 0;
    currentScore = 0;
}

function drawWater() {
    ctx.fillStyle = waterColor;
    ctx.fillRect(0, canvas.height - 100, canvas.width, 100);

    ctx.fillStyle = waveColor;
    for (let row = 0; row < numberOfWaveRows; row++) {
        for (let i = 0; i <= canvas.width; i += 20) {
            ctx.beginPath();
            ctx.arc(i, canvas.height - 80 + Math.sin(waterOffset + row) * waveEffectStrength, 10, 0, Math.PI, true);
            ctx.fill();
        }
    }
    waterOffset += waveSpeed;
}

function drawLog() {
    ctx.save();
    ctx.translate(400, canvas.height - 100);
    ctx.rotate(logAngle);

    ctx.fillStyle = 'saddlebrown';
    for (let i = 0; i < 8; i++) {
        const ringColor = i % 2 === 0 ? 'saddlebrown' : 'peru';
        ctx.beginPath();
        ctx.arc(0, 0, 25 - i * 2, 0, Math.PI * 2);
        ctx.fillStyle = ringColor;
        ctx.fill();
    }

    ctx.drawImage(stickFigure, -stickFigureWidth / 2, -stickFigureHeight, stickFigureWidth, stickFigureHeight);
    ctx.restore();
}

function drawTimer() {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`Time: ${timer.toFixed(1)}s`, 20, 30);
}

function drawHighScore() {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`High Score: ${highScore.toFixed(2)}s`, 20, 90);
}

function drawPauseMessage() {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    if (paused && gameStarted) {
        const message = 'ESC to Un-Pause';
        const textWidth = ctx.measureText(message).width;
        ctx.fillText(message, canvas.width - textWidth - 10, 30);
    } else if (!gameOver) {
        ctx.fillText('ESC to Pause', canvas.width - 150, 30);
    }
}

function drawBackground() {
    if (backgroundImageLoaded) {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    }
}

function drawMenu() {
    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';
    if (!imageLoaded) {
        const message = 'Game Loading...';
        const textWidth = ctx.measureText(message).width;
        ctx.fillText(message, canvas.width / 2 - textWidth / 2, canvas.height / 2);
    } else {
        const message = 'Press ENTER to put Justin Trudeau on the Roller';
        const textWidth = ctx.measureText(message).width;
        ctx.fillText(message, canvas.width / 2 - textWidth / 2, canvas.height / 2);
    }
}

function update(deltaTime) {
    if (gameStarted && !paused && !gameOver) {
        difficulty += deltaTime * 0.002;
        logAngularVelocity += (Math.random() - 0.5) * (0.002 + difficulty * 0.5);
        logAngle += logAngularVelocity;

        if (Math.abs(logAngle) > Math.PI / 2) {
            gameOver = true;
            if (currentScore > highScore) {
                highScore = currentScore;
            }
        }

        timer += deltaTime;
        logAngularVelocity *= 0.99;
    }
}

function gameLoop(timestamp) {
    if (!gameStarted) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBackground();
        drawMenu();
        requestAnimationFrame(gameLoop);
        return;
    }

    const deltaTime = (timestamp - lastRenderTime) / 1000;
    lastRenderTime = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWater();
    drawLog();
    drawTimer();

    if (gameStarted && !paused && !gameOver) {
        currentScore = timer;
    }

    drawHighScore();
    drawPauseMessage();

    update(deltaTime);

    if (gameOver) {
        ctx.font = '30px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText('Game Over', canvas.width / 2 - 90, canvas.height / 2 - 50);

        if (!firstGame) {
            drawMenu();
        }
    } else {
        requestAnimationFrame(gameLoop);
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        paused = !paused;
        if (!paused && gameStarted) {
            requestAnimationFrame(gameLoop);
        }
    }

    if ((event.key === 'Enter' && !gameStarted && imageLoaded) || (gameOver && event.key === 'Enter')) {
        gameStarted = true;
        resetGame();
        lastRenderTime = performance.now();
        firstGame = false;
        requestAnimationFrame(gameLoop);
    }

    if (gameOver || paused || !gameStarted) return;

    const playerInputStrength = 0.03;
    if (event.key === 'ArrowLeft') {
        logAngularVelocity -= playerInputStrength;
    } else if (event.key === 'ArrowRight') {
        logAngularVelocity += playerInputStrength;
    }
});

stickFigure.onload = function () {
    imageLoaded = true;
    if (!firstGame) {
        drawMenu();
    }
    requestAnimationFrame(gameLoop);
};

window.addEventListener("blur", () => {
    if (gameStarted && !gameOver) {
        paused = true;
        requestAnimationFrame(gameLoop);
    }
});
window.addEventListener("focus", () => {
    if (gameStarted && !gameOver && !paused) {
        requestAnimationFrame(gameLoop);
    }
});
