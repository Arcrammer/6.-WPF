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

var gpm = prompt("How fast will the water fill the pool in gallons per minute?"); // Rate of water filling the pool in gallons per miniute

if(gpm === "") {
	console.log("Please enter the speed of the water source which will fill the pool."); // Alert the user to provide a speed of the water source filling the pool
	var gpm = prompt("How fast will the water fill the pool in gallons per second?"); // Prompts the user again in the case they've provided an empty string
}

var eta = gallonsToFill / gpm; // Returns the amount of minutes it will take to fill the pool

if(eta >= 60){
	var eta = eta / 60; // Return the amount in hours and minutes if the pool will take more than 60 minutes to fill
	console.log("It will take " + eta + " hours for the pool to fill."); // Output if the pool will take longer than 60 minutes to fill
} else if(eta < 60) {
	console.log("It will take " + eta + " minutes for the pool to fill."); // Output if the pool will take less than 60 minutes to fill
} else {
	console.log("Look. You have to give me something to work with."); // Output if eta couldn't be determined because the user hasn't provided values
}