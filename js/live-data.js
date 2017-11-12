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

function showRandomTemps( upper, lower, htmlArea ) {
	let result = getRandomNumbers( upper, lower );
		htmlArea.textContent = result;
}

/* ========
======= Events
============ */

window.addEventListener('load', function() {

	
		setInterval( () => {
			currentTemp.forEach( oneTemp => {
				showRandomTemps( 78, 72, oneTemp );
			});
		}, 1200 );
	

	setInterval( () => {
		currentPulse.forEach( onePulse => {
		showRandomTemps( 87, 68, onePulse );
		});
	}, 1700 );

}, false); // End Event






