/*	Alexander Rhett Crammer
	WPF 1408 Section 1
	Thursday, 14 August, 2014
	Conditionals Worksheet	*/

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

// Check the Login

var username = prompt("Username:\t\t(\"BeautifulUsername\" is the valid username.)");
var pass = prompt("Password:\t\t(\"cats and unicorns\" is the valid password.)");
var usernameRecord = "BeautifulUsername";
var passRecord = "cats and unicorns";

if(username === usernameRecord) {
	// Welcome the user -- If the username in the record was given
	
} else if(username != usernameRecord) {
	// Tell the user they've entered a username which isn't in the record
		
} else if(pass != passRecord) {
	// Tell the user they've entered a password which isn't in the record
	
}