var s, score;
var fps = 6;
var scl = 20;
var paused = false;
var cols, rows, food, foodObj;
var kpress = false;
var canvas;


function setup() {
    canvas = createCanvas(600, 600);
    cols = floor(width / scl);
    rows = floor(height / scl);
    s = new snake();
    score = new score();
    placeFood();
}

function draw() {
    frameRate(fps);
    kpress = false;
    background(50);
    noStroke();
    s.update();
    s.show();
    if (s.ateFood()) {
        placeFood();
    }

    if (s.dead()) {
        fps = 10;
        s = new snake();
    }

    fill(255, 0, 100);
    foodObj = rect(food.x * scl, food.y * scl, scl, scl);
}

function placeFood() {

    var flag = false;
    var foodx = Math.floor((Math.random() * cols) + 0);
    var foody = Math.floor((Math.random() * rows) + 0);

    while (!flag) {
        var freeSpace = true;
        
        for (var i = 0; i < s.tail.length; i++) {
            if (s.tail[i].x == foodx && s.tail[i].y == foody) {
                freeSpace = false;
            }
        }
        if (freeSpace) {
            flag = true;
        } else {
            var foodx = Math.floor((Math.random() * cols) + 0);
            var foody = Math.floor((Math.random() * rows) + 0);
        }
    }

    food = createVector(foodx, foody);
}

function keyPressed() {
    if (!kpress) {
        if (keyCode === LEFT_ARROW && s.xspeed === 0) {
            s.xspeed = -1;
            s.yspeed = 0;
            kpress = true;
        } else if (keyCode === RIGHT_ARROW && s.xspeed === 0) {
            s.xspeed = 1;
            s.yspeed = 0;
            kpress = true;
        } else if (keyCode === UP_ARROW && s.yspeed === 0) {
            s.xspeed = 0;
            s.yspeed = -1;
            kpress = true;
        } else if (keyCode === DOWN_ARROW && s.yspeed === 0) {
            s.xspeed = 0;
            s.yspeed = 1;
            kpress = true;
        }
    }
}