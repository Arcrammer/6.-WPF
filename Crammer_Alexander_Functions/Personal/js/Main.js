/*	Alexander Rhett Crammer
	Thursday, 28 August, 2014
	Functions (Personal)	*/

// Calculates how long dog food will last based on the amount you have and the amoung you're feeding your doggy each day

var amountOfDoggyFood = prompt("How many ounces of food do you have stored for your doggy?"); // Asks the user to input the amount of food they have stored for the doggy to eat

/* Checks for empty input for 'amountOfDoggyFood' */
while(amountOfDoggyFood === "" || amountOfDoggyFood === " " || amountOfDoggyFood === "  ") {
	var amountOfDoggyFood = prompt("Please provide input:\n\nHow many ounces of food do you have stored for your doggy?");

}

var feedingEachDay = prompt("How many ounces are you feeding your doggy on a daily basis?"); // Asks the user to input the amount of food they're feeding their dog each day

/* Checks for empty input for 'feedingEachDay' */
while(feedingEachDay === "" || feedingEachDay === " " || feedingEachDay === "  ") {
	var feedingEachDay = prompt("Please provide input:\n\nHow many ounces are you feeding your doggy on a daily basis?");
}

var myFantasticAnonymousFunction = function(foodStored,feedingDaily) {
	var amountOfDaysTheFoodWillLast = foodStored / feedingDaily; // Returns the amount of time the dog food will last if the user continues the same feeding pattern
	return amountOfDaysTheFoodWillLast; // Returns the result of the calculation
}

var tidyResult = myFantasticAnonymousFunction(amountOfDoggyFood,feedingEachDay);

(isNaN(tidyResult)) ? console.log("Are you sure you've provided numerical input in the prompts earlier?") : console.log("The amount of food you have stored will last " + tidyResult + " times."); // Unnecessary ternary, outputting the result

/* I'm sorry this kind of goes along the coffee calculator idea. I'm the least creative person ever. */