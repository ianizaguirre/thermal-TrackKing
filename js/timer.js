"use strict";




// ----------
// --- Timer ---
//-----------

var h1 = document.getElementsByTagName('h2')[0],
    start = document.querySelector('.startBtn'),
    stop = document.querySelector('.stop'),
    clear = document.querySelector('.clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }

    }
    h1.textContent = /*(hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +*/ (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();
   
}
function timer() {
    t = setTimeout(add, 1000);
}


/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00";
    seconds = 0; minutes = 0; hours = 0;
};



start.addEventListener("click", function() {
	


// function turnToStop() {
// 	 let myStarter = document.querySelector(".myStarter");
// 	 myStarter.setAttribute("class", "stop");
// 	 		start.onclick = clearTimeout(t);
// 	 	}

// 	turnToStop();
	timer();
});


/* Start button */
//start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
};
/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00";//:00"; // we manually removed hours from html which is wrong
    seconds = 0; minutes = 0; hours = 0;
};













