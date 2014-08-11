/*	Alexander Rhett Crammer
	Monday, August 11, 2014
	Assignment: Expressions	*/

// WACKY CALCULATOR
// Calculates how many ducks can drive each truck in  a fleet of trucks

var trucks = prompt("How many trucks will be driven by the duckies?"); // Amount of trucks in the fleet
var ducks = prompt("How many duckies do you have to drive the trucks?"); // Amount of ducks which can drive the trucks
var trans = prompt("Which transmission type do your trucks use? (Enter 'manual' or 'automatic')"); // Determine the transmission of the trucks, manual or automatic

var ducksForTheTrucks = ducks / trucks; // Returns the amount of ducks for each truck

if(trans == 'manual') {
	var ducksTrans = ducksForTheTrucks + 2 + 3; // Amount of ducks to drive if manual (one duck more for the stick and another duck for the clutch)
	console.log("With one duckie at each pedal, two at the wheel, one at the stick, and another at the clutch, you'll need " + ducksTrans + " duckies to drive each of your truckies.");
} else if(trans == 'automatic') {
	var ducksTrans = ducksForTheTrucks + 3; // Amount of ducks to drive if automatic
	console.log("With one duckie at each pedal and two at the wheel, you'll need " + ducksTrans + " duckies to drive each of your truckies.");
};