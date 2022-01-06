const element = document.getElementById('demo');
const timer = document.getElementById('time');

// setInterval(function() {element.innerHTML = "IST — India Standard Time"}, 1000);
/*
setInterval(DisplayHello, 1000);
function DisplayHello(){
    document.getElementById('demo').innerHTML = "hello";
}*/

    const myInterval = setInterval(myTimer, 1000);  

    function myTimer(){
    const date = new Date();
    timer.innerHTML = date.toLocaleTimeString();
}

    function Stop(){
        console.log('stop');
       clearInterval(myInterval);
       clearInterval(obj);
       
       
}

   // let myInterval2 = setInterval(myTimer, 1000);
    function reset(){
    // const date = new Date();
    // timer.innerHTML = date.toLocaleTimeString();
    //  setInterval(myTimer, 1000);
        createSetInterval();
   console.log("reset");
}

function createSetInterval(){
    const obj = setInterval(myTimer, 1000);
    return obj;

}