/*	Alexander Rhett Crammer
	WPF 1408 Section 1
	Thursday, 14 August, 2014.
	Screencast: Conditionals	*/

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

if(iPhonePrice < budget || wonLottery === true) /* If the iPhone is less than budget  && if pay is more than 300 */ {
	console.log("You can buy an iPhone!");
} else /* Otherwise */ {
	console.log("No iPhone for you :(");
}