score = 0;
cross = true;
audiogo = new Audio('go.mp3');
audio = new Audio('gm.mp3');
setTimeout(() => {
    audio.play();
}, 1000);  //press any key on keyboard if song doesnt start

// to make dino jump
document.onkeydown = function (e) {
    console.log("Key code is :", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 200 + 'px';
    }

    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 200) + 'px';
    }
}

// to check the collision
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left')); //to check dino's left value
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left')); //to check dino's left value
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX,offsetY);
    if (offsetX <72  && offsetY <52) {

        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 10;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));// to inscrease obstacle speed
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';

            console.log(newDur);
        }, 500);


    }
}, 10);

// to update score
function updateScore(score) {
    scoreCount.innerHTML = "Your Score: " + score
}