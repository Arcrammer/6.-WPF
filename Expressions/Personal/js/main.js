/*	Alexander Rhett Crammer
	WPF 1408 Section 1
	Monday, August 11, 2014
	Assignment: Expressions	*/

// PERSONAL CALCULATOR
// This calculator will find the amount of gasoline you'll need to travel a particular amount of miles

var miles = prompt("How many miles will you be travelling?"); // Amount of miles to travel
var mpg = prompt("What is your vehicles' fuel economy in miles per gallon?"); // Miles per gallon of your vehicle
var capacity = prompt("What is your tank capacity in gallons?"); // Amount of gallons your vehicle can carry

var gallonsNeeded = miles / mpg; // Returns the amount of gallons needed for the trip
var refuelsNeeded = gallonsNeeded / capacity; // Returns the amount of refuels needed throughout the trip

console.log("You can make the trip with " + gallonsNeeded + " gallons of fuel, which means you'll have to refuel " + refuelsNeeded + " times."); // Outputs the results