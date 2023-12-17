var clutter= " ";
var rn;  
var timer = 60;
const timerleft = setInterval(Timer , 1000);

function makeBubble(){
for(let i=1; i<=360; i++ ){
    rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".pbtm").innerHTML = clutter;
document.querySelector("#hitval").textContent = rn;
}

function Timer(){
    if(timer > 0){

        timer--;
        console.log(timer)
        console.log(timerleft)
        document.querySelector("#timer").textContent=timer;
    }
    else{
        clearInterval(timerleft);
        document.querySelector(".pbtm").innerHTML = "<h1> Game Over </h1>";
    }
}

Timer();
makeBubble();