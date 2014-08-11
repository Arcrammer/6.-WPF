/*	Alexander Rhett Crammer
	August 10, 2014
	Expressions	(Personal)	*/

// 'How Far Your Car Will go Before it Will Need More Gasoline' calculator

var gallonCapacity = 35; // Capacity of the fuel tank in gallons
var mpg = 30; // Miles per gallon of the vehicle to be driven
var distance = gallonCapacity * mpg; // Returns the amount of miles the vehicle can drive without refueling

document.write("Your vehicle will make around " + distance + " miles before it will need more fuel.");