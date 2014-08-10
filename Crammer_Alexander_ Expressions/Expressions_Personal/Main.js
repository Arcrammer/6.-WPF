/*	Alexander Rhett Crammer
	August 10, 2014
	Expressions	(Personal)	*/

var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();

var showTimeHour = 14; // The hour the show will air. Valid input is 0 to 24
var showTimeMinute = 30; // The hours minute in which the show will air. Valid input is 0 to 60
var currentTime = date.getHours() + ":" + date.getMinutes(); // Returns the current hour and minute in the formats: '19:34' or '5:14'

document.write(currentTime); // Writes the result of 'currentTime' to the document so I know it's working