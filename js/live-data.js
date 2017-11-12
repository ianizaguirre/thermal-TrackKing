"use strict";

/* ========
======= Vars
============ */

let currentTemp = document.querySelector('.card-data-big-temp');
let currentPulse = document.querySelector('.card-data-big-pulse');


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

	setInterval( function() {
		showRandomTemps( 78, 72, currentTemp );
	}, 1200 );

	setInterval( function() {
		showRandomTemps( 87, 68, currentPulse );
	}, 1700 );

}, false); // End Event






