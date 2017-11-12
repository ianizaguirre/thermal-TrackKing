"use strict";


let circleWrapper = document.querySelector('.circle-wrapper'); // Circle inside loader bars




let loader = document.getElementById('loader'); // Loader Bars Animation circle outline


function imitateThinking(onSomething) {
	const timeoutID = window.setTimeout(onSomething, 1200);
}


function tempOpacity() {
$('.bro').addClass('loader-hides-this');
}



// $( ".loader-hides-this" ).slidedown();
function showLoader() {
	tempOpacity();
	loader.style.display = 'block';
	circleWrapper.style.display = 'block';
}


function thenHideLoader() {
	
	var x = setTimeout( function() {
	loader.style.display = 'none';
	circleWrapper.style.display = 'none';

	$('.bro').removeClass('loader-hides-this');
	}, 600);
}






showLoader();

setTimeout(function(){ 
	thenHideLoader();
	 }, 1500);


