let hero = {
    top: 410,
    left: 420
};
let missles= [];
let enemies=[
    {left:200, top: 30},
    {left:300, top: 30},
    {left:400, top: 30},
    {left:500, top: 30},
    {left:600, top: 30},
    {left:200, top: 60},
    {left:300, top: 60},
    {left:400, top: 60},
    {left:500, top: 60},
    {left:600, top: 60}
];
document.onkeydown = function (e) {
    if(e.keyCode ===37){
        hero.left = hero.left - 10;
        moveHero()
    }
    else if(e.keyCode ===39){
        hero.left = hero.left +10;
        moveHero()
    }
    else if (e.keyCode===32){
        missles.push({
            left: hero.left + 15,
            top: hero.top
        })
        console.log(missles);
        drowMissles()
    }

};
function moveHero() {
    document.getElementById('hero').style.left = hero.left + "px";
};
function drowMissles() {
    document.getElementById('missles').innerHTML = "";
    for(let missle = 0; missle<missles.length; missle++){
        document.getElementById('missles').innerHTML +=
            `<div class='missle' style='left:${missles[missle].left}px;
top:${missles[missle].top}px;'></div>`
    }
}
function moveMissles() {
    for(let missle = 0; missle<missles.length; missle++){
      missles[missle].top = missles[missle].top -15;
    }
}
function drowEnemies(){
    document.getElementById('enemies').innerHTML = "";
    for(let enemy = 0; enemy<enemies.length; enemy++){
        document.getElementById('enemies').innerHTML +=
            `<div class='enemy' style='left:${enemies[enemy].left}px;
top:${enemies[enemy].top}px;'></div>`
    }
}
function moveEnemies() {
    for(let enemy = 0; enemy<enemies.length; enemy++){
        enemies[enemy].top = enemies[enemy].top +3;
    }
}
function colisionDetection() {
    for(let enemy = 0; enemy<enemies.length; enemy++){
        for(let missle = 0; missle<missles.length; missle++){
            if((missles[missle].top<= enemies[enemy].top + 50)&&
                (missles[missle].top > enemies[enemy].top)&&
                (missles[missle].left >= enemies[enemy].left)&&
                (missles[missle].left <= enemies[enemy].left +50)){
                enemies.splice(enemy, 1);
                enemies.splice(enemy, 1);
            }
        }
    }
}

function gameLoop() {
    setTimeout(gameLoop, 100)
    moveMissles();
    drowMissles();
    moveEnemies();
    drowEnemies();
    colisionDetection();
}
gameLoop();