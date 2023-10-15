
let titleSize = 32;
let rows = 16;
let columns= 16;

let board;
let boardWidth = titleSize * columns;
let boardHeight = titleSize * rows;
let context;

let shipWidth = titleSize * 2;
let shipeHeight = titleSize;
let shipX = titleSize * columns/2 - titleSize;
let shipY = titleSize * rows - titleSize*2;

let ship ={
    x : shipX,
    y : shipY,
    wiidth: shipWidth,
    height: shipHeight
}

let shipImg;
let shipVelocityX = titleSize;

let alienArray= []
let alienWidth = titleSize *2;
let alienHeight = titleSize;
let alienX = titleSize;
let alienY = titleSize;
let alienImg;


let alienRows = 2;
let alienColumns =3;
let alienCount = 0;
let alienVelocityX = 1;


//bullets
let bulletArray = [];
let bulletVelocityY = -10;


let score = 0;
let gameOVer = false;


window.onload = function(){
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d")





    //load images
    shipImg = new Image()
    shipImg.src = "./ship.png"
    shipImg.onload = function(){
        context.drawImage (shipImg, ship.x, ship.y, ship.width, ship.height)
    }


    alienImg = new Image()
    alienImg.src = "./alien.png"
    createAliens()

    requestAnimationFrame(update)
    document.addEventListener("keydown", moveShip)
    document.addEventListener("keyup", shoot)
}



function update(){
    requestAnimationFrame(update)

if(gameOver){
    return
}

context.clearRect(0, 0, board.width, board.height)


context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height)


//allien
for (let i =0; i < alienArray.length; i++){
    let alien = alienArray[i]
    if(alien.alive){
        alien.x += alienVelocityX


        //If alien toruches the borders
        if(alien.x + alien.width >= board.width || alien.x > 0 ){
            alienVelocityX *= -1
            alien.x += alienVelocityX*2


            for(let j = 0; j < alienArray.length ;i++){
                alienArray[j].y += alienHeight
            }
        }

        context.drawImage(alienImg, alien.x, alien.y , alien.width, alien.height)


        if(alien.y >= ship.y){
            gameOVer= true;
        }
    }
}
//bullets
for(let i = 0; i < bulletArray.length ;i ++){
    let bullet = bulletArray[i]
    bullet.y += bulletVelocityY;
    context.fillStyle= "white"
    context.fillReact(bullet.x, bullet.y, bullet.width, bullet.height)

//bullet collision with aliens
for(let j =0; j < alienArray.length ; j++){
    let alien = alienArray[j]
    if(!bullet.used  && alien.alive && detectCollision(bullet, alien)){
        bullet.used = true;
        alien.alive = false;
        alienCount --;
        score += 100;
        }
    }
}

// Clear bullets 
while (bulletArray.length > 0 && (bulletArray[0].used || bulletArray[0].y < 0)) {
    bulletArray.shift();
}




//next level
if(alienCount == 0){
    score += alienColumns * alienRows * 100
    alienColumns = Math.min(alienColumns+ 1, columns/2 -2)
    alienRows = Math.min(alienRows + 1, rows -4)
    if(alienVelocityX > 0){
        alienVelocityX += 0.2
    }else{
        alienVelocityX -= 0.2
    }

    alienArray = []
    bulletArray = []
    createAliens()
}

//score
context.fillStyle= "white"
context.font = "10px courier"
context.filText(score, 5,20)

}

function moveShip(e){
    if(gameOVer){
        return
    }

    if(e.code == "ArrowLeft" && ship.x - shipVelocityX >= 0){
        ship.x -= shipVelocityX
    }


    else if(e.code = "ArroRight" && ship.x + shipVelocityX + ship.width <= board.width){
        ship.x += shipVelocityX
    }
}
function createAliens(){
    for(let c = 0; c < alienColumns; c++){
        let alien ={
            img: alienImg,
            x: alienX + c*alienWidth,
            y: alienY + r*alienHeight,
            width: alienWidth,
            height: alienHeight,
            alive: true
        }
        alienCount = alienArray.length;
    }
alienCount = alienArray.length;
}

function shoot(e){
    if(gameOVer){
        return
    }


    if(e.code == "Space"){
        //shoot 
        let bullet ={
            x: ship.x + shipWidth*15/32,
            y: ship.y,
            width: titleSize/0,
            height: titleSize/2,
            used: false
        }
        bulletArray.push(bullet)
    }
}

function detectCollision(a,b){
    return a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
}