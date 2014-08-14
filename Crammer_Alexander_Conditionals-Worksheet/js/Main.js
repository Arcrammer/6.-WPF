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

} else if(unit === "C") {
	// Convert to celsius from fahrenheit
	
} else {
	// Tell the user they've entered anything other than 'F' or 'C' in 'unit'
	
}