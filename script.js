//Date variables
const now = new Date();
const date = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();
const hours = now.getHours();
const minutes = now.getMinutes();

//TIMER variables
let elapsedTime = 0;
let timerInterval;
let timerRunning = false;
let workHours = 0;
let pauseInterval;
let pausedTime = 0;
let pausedRunning = false;


//taimer ju duubeldab, küllap saaks ühe funktsiooniga pausi ja tööd luged 
function start() {
    if(!timerRunning) {
        timerInterval = setInterval(() => {
            elapsedTime++
            document.getElementById('timer').innerHTML = elapsedTime;
        }, 1000);
        clearInterval(pauseInterval);
        timerRunning = true;
        pausedRunning = false;
    }
};

function pause() {
    if(!pausedRunning) {
        pauseInterval = setInterval(() => {
            pausedTime++
            document.getElementById("paused").innerHTML = pausedTime;
        }, 1000);
    clearInterval(timerInterval);
    timerRunning = false;
    pausedRunning = true;
    }
};

function endDay() {
    workHours = elapsedTime/3600
    document.getElementById("hourStats").innerHTML = "Hours: " + workHours
    document.getElementById("payStats").innerHTML = "EUR: " + workHours*30 
    document.getElementById("pauseStats").innerHTML = "Pause: " + pausedTime/60 + " min"
    document.getElementById('timer').innerHTML = elapsedTime;
    document.getElementById('paused').innerHTML = pausedTime;
    document.getElementById("dateStats").innerHTML = "Date: " + date + "." + month + "." + year
    clearInterval(timerInterval);
    clearInterval(pauseInterval)
    elapsedTime = 0;
    workHours = 0;
    pausedTime = 0;
    timerRunning = false;
    pausedRunning = false;
    };

document.getElementById("playButton").addEventListener("click", start);
document.getElementById("pauseButton").addEventListener("click", pause);
document.getElementById("stopButton").addEventListener("click", endDay);