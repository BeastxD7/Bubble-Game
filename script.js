var clutter= " ";
var rn;  
var timer = 60;
var score = 0;
var timerleft = setInterval(Timer , 1000);

function makeHit(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}

function makeBubble(){
for( var i=1; i<=360; i++ ){
    var random = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${random}</div>`;
}
document.querySelector(".pbtm").innerHTML = clutter;

}


function Timer(){
    if(timer > 0){

        timer--;
        document.querySelector("#timer").textContent=timer;
    }
    else{
        clearInterval(timerleft);
        document.querySelector(".pbtm").innerHTML = "<h1> Game Over </h1>";
    }
}

function increaseScore(){
    score += 10;
    document.querySelector('#scoreval').textContent=score;
}

document.querySelector(".pbtm").addEventListener("click", function(dets){
    var clicknum = Number(dets.target.textContent);

    if(clicknum === rn){
        increaseScore();
        makeBubble();
        makeHit();
    }
})

Timer();
makeBubble();
makeHit();