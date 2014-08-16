/*	Alexander Rhett Crammer
	WPF 1408 Section 1
	Friday, 15 August, 2014
	Conditionals	*/

// WACKY
// Calculates the amount of water needed to fill a pool

var gallonsToFill = prompt("How many gallons of water will you fill the pool with?"); // Amount of water to fill the pool in gallons

if(gallonsToFill === "") {
	console.log("Please enter the amount of water you'll be filling the pool with."); // Alert the user to provide an amount of water to fill the pool with
	var gallonsToFill = prompt("How many gallons of water will you fill the pool with?"); // Prompts the user again in the case they've provided an empty string
}

var gpm = prompt("How fast will the water fill the pool in gallons per second?"); // Rate of water filling the pool in gallons per miniute

if(gpm === "") {
	console.log("Please enter the speed of the water source which will fill the pool."); // Alert the user to provide a speed of the water source filling the pool
	var gpm = prompt("How fast will the water fill the pool in gallons per second?"); // Prompts the user again in the case they've provided an empty string
}


