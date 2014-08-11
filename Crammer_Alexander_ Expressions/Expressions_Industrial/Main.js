/*	Alexander Rhett Crammer
	August 10, 2014
	Expressions	(Industrial)	*/

var connection = 30; // Mbps speed of your connection
var downloadSize = 500; // Mb of the file you're downloading
var totalMb = connection * downloadSize; // Multiplys the connection speed and download size
var seconds = totalMb / 60; // Returns the seconds of the download time
var minutes = Math.round(seconds / 60); // Minutes of the download, rounded

document.write("It will take around " + minutes + " minutes to download the file."); // Writes the eta in minutes to the document