const startButton = document.querySelector("#start-button");
const endButton = document.querySelector("#end-button");
const timer = document.querySelector("#timer");

let sec = 0;
let min = 0;
let hour = 0;

function drowTime(){
  sec = sec + 1;
  if(sec === 60){
    min = min + 1;
    sec = 0;
  }
  if(min === 60){
    hour = hour + 1;
    min = 0;
  }
  
  timer.innerText = `${hour >= 10? hour : "0"+hour}:${min >= 10? min : "0"+min}:${sec >= 10? sec : "0"+sec}`;
}

function handleEvent(){
  let interval = null;
  startButton.addEventListener("click", ()=>{
    interval = setInterval(drowTime, 1000);
  });
  endButton.addEventListener("click", ()=>{
    clearInterval(interval);
  });
}

function init(){
  handleEvent();
}

init();
