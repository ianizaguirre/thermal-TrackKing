"use strict";

/* ========
======= Vars
============ */

let currentTemp = document.querySelectorAll(".card-data-big-temp");
let currentPulse = document.querySelectorAll(".card-data-big-pulse");


// let putTempSign = '<span class="deg-f">℉</span>';


/* ========
======= Functions
============ */

function getRandomNumbers( upper, lower ) {
	 return  Math.floor( Math.random() * ( upper - lower + 1 )) + lower;
	  
}

function update( value, htmlArea ) {
		htmlArea.textContent = value;
}

/* ========
======= Events
============ */

window.addEventListener('load', function() {

	
		// setInterval( () => {
		// 	currentTemp.forEach( oneTemp => {
		// 		showRandomTemps( 78, 72, oneTemp );
		// 	});
		// }, 1200 );
	

	setInterval( () => {
		currentPulse.forEach( onePulse => {
			update( getRandomNumbers( 87, 68), onePulse );
		});
	}, 1700 );

}, false); // End Event






