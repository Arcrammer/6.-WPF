/*	Alexander Rhett Crammer
	WPF 1408 Section 1
	GoToTraining Week 2
	Wednesday, August 13, 2014	*/

// Calculator to find your age

// Ask the user for their name
var name = prompt("What's your first name?");

// Tell the user 'hello' and tell them what we're doing using an alert()
alert("Welcome, " + name + "! Let's go ahead and figure out how old you are.");

// Ask the user for their birth year
var yearOfBirth = prompt("Which year is your birth year?");

// Create a variable for the current year
var currentYear = 2014;

// Output the response to the console
console.log(yearOfBirth);

// Current year minus the year they were born
var yearsOld = currentYear - parseInt(yearOfBirth);

// Alert the user with their age
alert(name + ", you are " + yearsOld + " years old.");

// How old will the user be in the future?

// Ask the user how many years in the future they'd like to know
var yearsMore = prompt("How many years in the future would you like to know?");

// console.log(yearsMore);

// Calculate our future age

var futureAge = Number(yearsOld) + Number(yearsMore);
console.log(futureAge);