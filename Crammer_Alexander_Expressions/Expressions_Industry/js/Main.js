/*	Alexander Rhett Crammer
	Monday, August 11, 2014
	Assignment: Expressions	*/

// INDUSTRIAL CALCULATOR
// This calculator will calculate the amount of email you'll need to read each day based on the amount of time you plan to spend reading your email, and it will also tell you if you'll have enough time to read all of the emails you plan to within a certain span of time.

var emails = prompt("How many emails would you like to read in total?"); // Amount of emails you plan to read
var readingPerDay = prompt("How many emails do you plan to read each day?"); // Amount of emails you plan to read each day
var time = prompt("How many days would you like to spend reading these emails?"); // Amount of days you plan to spend reading the emails each day

var daysToRead = emails / readingPerDay; // Returns the amount of emails to be read daily

if(daysToRead > time) {
	willReadOrNot = "will not";
} else {
	willReadOrNot = "will";
}

console.log("It will take " + daysToRead + " days to read each of the emails, so you " + willReadOrNot + " have the time to read all of your emails within the time you'd like to.");