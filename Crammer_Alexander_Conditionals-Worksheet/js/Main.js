/*	Alexander Rhett Crammer
	WPF 1408 Section 1
	Thursday, 14 August, 2014
	Conditionals Worksheet	*/

// GROUP ONE
// Celsius to Fahrenheit converter

var degrees = prompt("Which tempurature would you like to convert?");
var unit = prompt("Please enter 'F' to convert the previously entered tempurature to celsius, or 'C' to convert it to fahrenheit.");
var inCelsius = (degrees - 32) * 5 / 9; // The expression of this variable uses the algebraic formula to convert fahrenheit to celsius
var inFahrenheit = degrees * 1.8 + 32; // The expression of this variable uses the algebraic formula to convert celsius to fahrenheit

if(unit === "F") {
	// Convert to fahrenheit from celsius
	console.log("The temperature is " + inCelsius + " degrees Celsius.");
} else if(unit === "C") {
	// Convert to celsius from fahrenheit
	console.log("The temperature is " + inFahrenheit + " degrees Fahrenheit.");
} else {
	// Tell the user they've entered anything other than 'F' or 'C' in 'unit'
	console.log("You've given a value other than 'F' or 'C' in the second prompt so I'm unable to convert the tempurature.");
}

// GROUP TWO
// Check the Login

var username = prompt("Username:\t\t(\"BeautifulUsername\" is the valid username.)");
var pass = prompt("Password:\t\t(\"cats and unicorns\" is the valid password.)");
var usernameRecord = "BeautifulUsername";
var passRecord = "cats and unicorns";

if(username === usernameRecord && pass === passRecord) /* I've just realised I'll need to have this in order to keep this from being executed when the user enters the correct username but incorrect password */ {
	// Welcome the user -- If the username in the record was given
	console.log("Welcome, " + usernameRecord + "!");
} else if(username != usernameRecord) {
	// Tell the user they've entered a username which isn't in the record
	console.log("User not found. Try again.");
} else if(username === usernameRecord && pass != passRecord) {
	// Tell the user they've entered a password which isn't in the record
	console.log("Password does not match our records");
}

// GROUP THREE
// Tire Pressure I

var leftFrontPressure = prompt("Please enter the pressure for the left-front tyre.");
var rightFrontPressure = prompt("Please enter the pressure for the right-front tyre.");
var leftRearPressure = prompt("Please enter the pressure for the left-rear tyre.");
var rightRearPressure = prompt("Please enter the pressure for the right-rear tyre.");
var pressures = Array(leftFrontPressure,rightFrontPressure,leftRearPressure,rightRearPressure);


