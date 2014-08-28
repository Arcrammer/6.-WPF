/*	Alexander Rhett Crammer
	Thursday, 28 August, 2014
	Functions (Industry)	*/

// Calculates upload eta based on upload speed and file size

var uploadSpeed = prompt("What is your upload speed in Mbps?"); // Prompts the user for their upload speed in Mbps

if(uploadSpeed === "" || uploadSpeed === "  " || uploadSpeed === "   ") {
	prompt("Please provide input:\n\nWhat is your upload speed in Mbps?"); // Prompts the user for input if they've entered a few spaces or an empty string
}

var uploadFileSize = prompt("What is the size of the file you're uploading in Mb?"); // Prompts the user for their upload files' size

if(uploadFileSize === "" || uploadFileSize === "  " || uploadFileSize === "   ") {
	var uploadFileSize = prompt("Please provide input:\n\nWhat is the size of the file you're uploading in Mb?"); // Prompts the user for input if they've entered a few spaces or an empty string
}

/* Defining the function to provide the result of the calculation */
function howLongWillItTakeToUploadTheFiles(speed,size) {
	var howLongItWillTakeToUpload = size / speed; // Returns the amount of time it will take to upload the files in seconds to the variable 'howLongItWillTakeToUpload'
	return howLongItWillTakeToUpload;
}