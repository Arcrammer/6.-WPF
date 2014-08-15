/*	Alexander Rhett Crammer
	WPF 1408 Section 1
	Friday, 15 August, 2014
	Conditionals	*/

// Calculates how long a bag of coffee will last for daily coffee drinkers

var packSize = prompt("How many pounds are in your bag of coffee?"); // Determines the size of the bag of coffee in pounds
var brewingDaily = prompt("How many tablespoons are you brewing on a daily basis?"); // Determines the amount of coffee being brewed each day in tablespoons
var weekendDrinker = prompt("Do you brew on the weekends? ('yes' or 'no')"); // Determines if the user drinks coffee during the weekends
var weekendDrinker = weekendDrinker.toLowerCase();

if(weekendDrinker === "yes" || weekendDrinker === "true") {
	weekendDrinker = true ; // Set if the user does drink coffee on the weekends
} else if (weekendDrinker === "no" || weekendDrinker === "false") {
	weekendDrinker = false; // Set if the user doesn't drink coffee on the weekends
}


