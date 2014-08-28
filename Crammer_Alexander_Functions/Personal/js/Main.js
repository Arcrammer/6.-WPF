/*	Alexander Rhett Crammer
	Thursday, 28 August, 2014
	Functions (Personal)	*/

// Calculates how long dog food will last based on the amount you have and the amoung you're feeding your doggy each day

var amountOfDoggyFood = prompt("How many ounces of food do you have stored for your doggy?"); // Asks the user to input the amount of food they have stored for the doggy to eat

/* Checks for empty input for 'amountOfDoggyFood' */
while(amountOfDoggyFood === "") {
	var amountOfDoggyFood = prompt("How many ounces of food do you have stored for your doggy?");

}

var feedingEachDay = prompt("How many ounces are you feeding your doggy on a daily basis?"); // Asks the user to input the amount of food they're feeding their dog each day

/* Checks for empty input for 'feedingEachDay' */
while(feedingEachDay === "") {
	var feedingEachDay = prompt("How many ounces are you feeding your doggy on a daily basis?");
}