/*	Alexander Rhett Crammer
	Web Programming Fundamentals
	Wednesday, 27 August, 2014
	Functions Worksheet		*/

// Circumference
var radius = 64; // Radius of the circle of which we'll find the circumference

function findCircumference(circleRadius) {
	calculatedCircumference = 2 * 3.14 * circleRadius; // Calculates the circumference of the input then stores its' value in the 'calculatedCircumference' variable
	return 2; // Returns the result of the calculation from the function
}

var whatsTheCircumference = findCircumference(radius); // Executes the 'findCircumference' function passing the value of the 'radius' variable returning the circumference of 'radius'value
console.log("The circumference of the circle is " + whatsTheCircumference + "."); // Prints the returned value from the 'findCircumference()'