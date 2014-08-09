var yearBorn = 1995;
var year = new Date().getFullYear(); // Get the current year and return it as YYYY

var age = year - yearBorn;

document.write(age); // This will print the amount of years from my birth year. Because my birth date is December 27 -- far from January -- the returned value will likely be inaccurate relevant to my birth date