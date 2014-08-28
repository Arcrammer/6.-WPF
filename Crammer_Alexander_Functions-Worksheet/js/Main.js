/*	Alexander Rhett Crammer
	Web Programming Fundamentals
	Wednesday, 27 August, 2014
	Functions Worksheet		*/

// Circumference
var radius = prompt("What is the radius of the circle you'd like to find the circumference for?"); // Radius of the circle of which we'll find the circumference

function findCircumference(circleRadius) {
	var calculatedCircumference = Math.round(2 * Math.PI * circleRadius); // Calculates the circumference of the input then stores its' value in the 'calculatedCircumference' variable
	return calculatedCircumference; // Returns the result of the calculation from the function
}

var whatsTheCircumference = findCircumference(radius); // Executes the 'findCircumference' function passing the value of the 'radius' variable returning the circumference of 'radius'value
console.log("The circumference of the circle is " + whatsTheCircumference + "."); // Prints the returned value from the 'findCircumference()'