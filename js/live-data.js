"use strict";

/* ========
======= Vars
============ */

let currentTemp = document.querySelector('.card-data-big-temp');


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
		showRandomTemps( 90, 72, currentTemp );
	}, 900 );

}, false); // End Event






