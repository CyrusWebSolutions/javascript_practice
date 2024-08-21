
/*random number generator version 1
This first version is just Math.random(). It will produce a random number with alot
of decimal places from 0 to 1.
*/
let randomNum1 = Math.random();

console.log(randomNum1);

/*Now lets say we want to get a random number like when you roll dice
Dice have 6 sides, so we have to multiply the Math.random function by 6.
This will give a number between 0 and 6, exclusive.
*/

let randomNum2 = Math.random() * 6;
console.log(randomNum2);

/*Now we want to refine further and make it so we don't have a decimal, just whole number
We also have to add one at the end so we get numbers 1 through 6 not 0 through 5.
*/

let randomNum3 = Math.floor(Math.random() * 6) + 1;
console.log(randomNum3);

/*What if we want a random number between 1 and 100?
We will need to do the following
*/

let randomNum4 = Math.floor(Math.random() * 100) + 1;
console.log(randomNum4);


/*What if we want random number between two numbers
What if we want random number between 50 and 100
*/
//const minNum = 50;
//const maxNum = 100;
//let randomNum5 = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
//console.log(randomNum5);


// Actual program is from here on...
const rollButton = document.getElementById("rollButton");
const rollLabel = document.getElementById("rollLabel");
const min = 1;
const max = 6;
let randomNumber;

rollButton.onclick = function(){
    randomNumber = Math.floor(Math.random() * max) + min;
    rollLabel.textContent = randomNumber;
}