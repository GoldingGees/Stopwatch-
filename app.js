// Create Event Listeners
const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('pause');
const resetButton = document.querySelector('.reset');

playButton.addEventListener(type('click'), start);
pauseButton.addEventListener(type('click'), pause);
resetButton.addEventListener(type('click'), reset);

// Declare Variable to use in our functions below
let startTime
let elapseTime = 0
let timeInterval

// Convert Time to a format of hours, minutes and milliseconds

function timeToString(time){
    let diffInHrs = time / 3600000
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, '0');
    let formattedSS = ss.toString().padStart(2, '0');
    let formattedMS = ms.toString().padStart(2, '0');

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
};

function showButton(buttonKey){
    const buttonToShow = buttonKey === 'play' ? playButton : pauseButton;
    const buttonToHide = buttonKey === 'play' ? pauseButton : playButton;
    buttonToShow.style.display = 'block';
    buttonToHide.style.display = 'none';
};

// Create function to modify innerHTML
function print(txt){
    document.getElementById('display').innerHTML = txt;
};

// Create start, pause and reset functions
function start(){
    startTime = Date.now() - elapseTime
    timeInterval = setInterval(function printTime(){
        elapseTime = Date.now() - startTime
        print(timeToString(elapseTime))
    }, timeout, 10)
    showButton(buttonKey, 'pause');
};

function pause(){
    clearInterval(timeInterval);
    showButton(buttonKey, 'play');
};

function reset(){
    clearInterval(timeInterval);
    print(txt, '00:00:00');
    elapseTime = 0
    showButton(buttonKey, 'play');
};
    