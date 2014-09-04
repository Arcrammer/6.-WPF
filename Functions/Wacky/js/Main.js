/*	Alexander Rhett Crammer
	Thursday, 28 August, 2014
	Functions (Wacky)	*/

// Calculates how much sugar you consume in a given time span

var dailyConsumption = prompt("How many cups of sugar are you consuming on a daily basis?"); // Asks the user for the amount of sugar they're consuming daily

if(isNaN(dailyConsumption)) {
	var dailyConsumption = prompt("Please enter a numerical value:\n\nHow many cups of sugar are you consuming on a daily basis?"); // Prompts the user to provide numerical input if anything beside a number has been provided
}

var daySpan = prompt("For how many days would you like to determine your total sugar consumption?"); // Asks the user for the amount of days to use in the calculation

if(isNaN(daySpan)) {
	var daySpan = prompt("Please enter a numerical value:\n\nFor how many days would you like to determine your total sugar consumption?"); // Prompts the user to provide numerical input if anything beside a number has been provided
}

function totalAmountOfCupsConsumed(consumingDaily,spanOfDays) {
	return consumingDaily * spanOfDays; // Returns the total amount of sugar consumed within the day span given
}

console.log(totalAmountOfCupsConsumed(dailyConsumption,daySpan)); // Outputs the total amoung by calling the named function 'totalAmountOfCupsConsumed()' and passing the users' input to it
