
"use strict";

// $( ".row3" ).removeClass('hide-this')();


$( ".row3" ).slideToggle();

// Event Handler
$('.monitor-btn').click( function () {
	$( ".row3" ).slideToggle(1000);

}); // event END

	// Event Handler
$('.monitor-btn-red').click( function () {
	$( ".row3" ).slideToggle(1000);
});// event END
