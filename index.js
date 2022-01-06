const element = document.getElementById('demo');
const timer = document.getElementById('time');


var globalInterval = setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    timer.innerHTML = date.toLocaleTimeString();
}

function Stop() {
    console.log('stop');
    clearInterval(globalInterval);
}

// let myInterval2 = setInterval(myTimer, 1000);
function reset() {
 
    globalInterval = createSetInterval();
    console.log("reset");

}

function createSetInterval() {
    const obj = setInterval(myTimer, 1000);
    return obj;

}
