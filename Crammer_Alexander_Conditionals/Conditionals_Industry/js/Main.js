/*	Alexander Rhett Crammer
	WPF 1408 Section 1
	Friday, 15 August, 2014
	Conditionals	*/

// Calculates the average amount of commits to a Git repository

var commits = prompt("How many commits have been made?"); // Asks the user for the total amount of commits to account for
var days = prompt("How many days have passed between the first and last commits?"); // Asks the user for the amount of days between the first commit and last commit

if(commits === "") {
	console.log("You've forgotten to enter the amount of commits."); // Alerts the user they've forgotten to provide input for 'commits'
	var commits = prompt("How many commits have been made?"); // Asks the user for the total amount of commits to account for
} else if(days === "") {
	console.log("You've forgotten to enter the amount of days between the commits."); // Alerts the user they've forgotten to provide input for 'days'
	var days = prompt("How many days have passed between the first and last commits?"); // Asks the user for the amount of days between the first commit and last commit
}

var average = commits / days; // Returns the average amount of commits each day
