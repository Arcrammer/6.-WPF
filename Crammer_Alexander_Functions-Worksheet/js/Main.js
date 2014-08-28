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

// Stung!
var victimsWeight = prompt("What is the victims' weight in pounds?"); // Prompt()'s the user for the victims' weight in pounds

function stung(weightOfTheVictim) {
	/*	I seriously have no idea how to implement something to find how many stings it would take to kill
	a victim based on their weight so here is some ridiculous math to show that I know how to perform a
	calculation within a function then return the result. 
	
	Although I've come across a source which says most victims can withstand around 10 stings from a bee
	for every pound of their bodyweight, so I'll be using this information as a base for my calculation	*/
	var variableWhichWouldLikelyBeBetterToStoreTheValueOfInTheReturnStatement = weightOfTheVictim / 50; // Calculates how many stings it would take to kill a victim based on their weight
	return variableWhichWouldLikelyBeBetterToStoreTheValueOfInTheReturnStatement; // Returns the amount of stings which can be withstood
}