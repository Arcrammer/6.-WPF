/*	Alexander Rhett Crammer
	August 10, 2014
	Expressions	(Personal)	*/

var date = new Date(); // Creates the Date() object
var hour = date.getHours(); // Returns the current hour in the format '0' to '24'
var showTimeHour = 14; // The hour the show will air. Valid input is '0' to '24'
var something = showTimeHour * hour;

document.write(something);