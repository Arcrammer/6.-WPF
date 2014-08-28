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

var usersPatience = prompt("Are you patient? Please enter 'Yes' or 'No'."); // Asks the user to determine their patience on a 'yes' or 'no' level

usersPatience.toLowerCase(); // Makes the users' input for 'usersPatience' prompt lowercase regardless of the case of the input provided

/* Either changes the users' input to a boolean value or asks them to provide either 'yes' or 'no' if they've entered anything other than those words, including spaces and meaningless input */
if(usersPatience != "yes" && usersPatience != "no") /* Carefully using the && logical operator to be sure this statement won't be executed if the user enters either 'yes' or 'no', but instead enters anything other than 'yes' or 'no' */ {
	var usersPatience = prompt("Please provide input:\n\nAre you patient? Please enter 'Yes' or 'No'."); // Asks the user to determine their patience again
} else if(usersPatience === "yes") {
	var usersPatience = true; // Sets 'usersPatience' to a boolean if 'yes' was entered
} else if(usersPatience === "no") {
	var usersPatience = false; // Sets 'usersPatience' to a boolean if 'no' was entered
}

/* Defining the function to provide the result of the calculation */
function howLongWillItTakeToUploadTheFiles(speed,size,patience) {
	var howLongItWillTakeToUpload = (size / speed) / 60; // Returns the amount of time it will take to upload the files in minutes to the variable 'howLongItWillTakeToUpload'
	if(patience === true) {
		var output = console.log("It will take " + howLongItWillTakeToUpload + " minutes to upload the files. Because you're patient, you'll have no problem waiting through this time for the files to upload!"); // Output if the user is patient
	} else if(patience === false) {
		var output = console.log("It will take " + howLongItWillTakeToUpload + " minutes to upload the files. Because you're nbot patient, you'll have some issues waiting through this time for the files to upload, so I suggest you take a minute to relax and chill out!"); // Output if the user is not patient

	}
	return output;
}

howLongWillItTakeToUploadTheFiles(uploadSpeed,uploadFileSize,usersPatience); // Calling the function which also outputs the result of the calculation to the console
