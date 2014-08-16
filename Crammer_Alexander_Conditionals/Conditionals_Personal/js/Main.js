/*	Alexander Rhett Crammer
	WPF 1408 Section 1
	Friday, 15 August, 2014
	Conditionals	*/

// Calculates how long a bag of coffee will last for daily coffee drinkers

var packSize = prompt("How many ounces are in your bag of coffee?"); // Determines the size of the bag of coffee in ounces
var brewingDaily = prompt("How many tablespoons are you brewing on a daily basis?"); // Determines the amount of coffee being brewed each day in tablespoons
var weekendDrinker = prompt("Do you brew on the weekends? ('yes' or 'no')"); // Determines if the user drinks coffee during the weekends
var weekendDrinker = weekendDrinker.toLowerCase();

if(weekendDrinker === "yes" || weekendDrinker === "true") {
	weekendDrinker = true ; // Set if the user does drink coffee on the weekends
} else if (weekendDrinker === "no" || weekendDrinker === "false") {
	weekendDrinker = false; // Set if the user doesn't drink coffee on the weekends
} else {
	console.log("Please enter either 'yes' or 'no' to determine if you drink on the weekends");
	var weekendDrinker = prompt("Do you brew on the weekends? ('yes' or 'no')"); // Determines if the user drinks coffee during the weekends
}

// There are 0.5 ounces in each US tablespoon
/* Now we'll divide the amount of tablespoons and the amount of ounces in the bag of coffee to see how long it will
   last as long as the user brews the input amount of tablespoons each day	*/

if(weekendDrinker === false) {
	// Calculation if the user does not brew coffee during the weekends
	var willLast = 	packSize / (brewingDaily / 2); // Returns the amount of instances remaining in which the user will have enough coffee to brew another cup
} else if(weekendDrinker === true) {
	// Calculation if the user does brew coffee during the weekends
	willLast = (packSize / (brewingDaily / 2)) / 5; // Returns the amount of weeks the user will have enough coffee in the pack to brew another cup
}
