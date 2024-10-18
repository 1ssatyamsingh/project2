let gameSeq = [];
let userSeq = [];


let started = false;
let level = 0;
let highS=0;

let highScore = document.querySelector("#highScore");

let btns = ["red","orange","green","blue"];

let h2 = document.querySelector("#starter");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;    
        levelUp();
    }

});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randomIndex = Math.floor(Math.random()*4);
    let randColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function checkAns(idx){
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            levelUp();
        }
    } else{
        h2.innerHTML = `Game over! Your score was ${level-1}.<br> Press any key to start`;
        document.querySelector("body").style. backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style. backgroundColor = "white";
        },150);
        if(level>highS){
            highS = level;
        }
        highScore.innerHTML = `Your High Score is ${highS-1}`;
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}