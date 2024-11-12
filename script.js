const now = new Date();
const date = now.getDate();
const month = now.getMonth();
const hours = now.getHours();
const minutes = now.getMinutes();

//TIMER variables
let elapsedTime = 0;
let timerInterval;
let timerRunning = false;



function start() {
    if(!timerRunning) {
        timerInterval = setInterval(() => {
            elapsedTime++
            document.getElementById('timer').innerHTML = elapsedTime;
        }, 1000);
        timerRunning = true;
    }
};

function pause() {
    clearInterval(timerInterval);
    timerRunning = false;
};

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerRunning = false;
    document.getElementById('timer').innerHTML = elapsedTime;
};


document.getElementById("playButton").addEventListener("click", start);

document.getElementById("pauseButton").addEventListener("click", pause);
  document.getElementById("stopButton").addEventListener("click", reset);