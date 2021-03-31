// quick string question answer:

// let name = `kate`;
// console.log(` this can interpolate as well as print any symbol ' " [] ${name}`)
// console.log('this will print like a string but our symbols need help can "quote" ')

//conditional statements- if, if else/else if,switch, ternary

/*if statements
checkes for boolean value if something is true it is truthy(a truthy statement), or falsy
truthy- if condition is or can be true
Falsy- - if condition is false or can be false 
Some falsy expressions are : null, NaN(not a number), O, an empty tring (" "), and undefined
if condition is true, then js will execute(perform) the code block
if checks one , singular, condition*/

//Declare a variable
// let isOpen = true;

// //the condition to check is held in our ( )
// if (isOpen === true) {
//     // the code we perform if the condition is met is held in {}
//     console.log('The door is open');
// };
// // same as above, statement checks if the value in parenthesis is true
// if (isOpen) {
//     console.log('The door is open');
// };

// //can test false values
// if (isOpen) {
//     console.log('The door is shut');
// };

/*IF ELSE
if else is used to check a condition , but run a code block for either the met condition or the separate code block if it does not meet the condition*/

// let isOpen = false;

// if (isOpen === true) {
//     console.log('You can go inside, the door is open.');
// } else {
//     console.log('The door is not open to enter');
// };


// let temp = 70;

// if (temp >= 65) {
//     console.log('What a nice day');
// } else {
//     console.log('I need a sweater');
// };

/*ELSE IF
// else if used to allow us to check more than 2 conditions
// Examples: Day 2 challenge, Fizz Buzz Challenge*/

// let temp = 70;

// if (temp >= 80) {
//     console.log('I know people are wearing shorts');
// } else if (temp >= 65) {
//     console.log('This is t-shirt weather for most folks');
// } else if (temp >= 50) {
//     console.log( "You're going to need a sweater")
// } else {
//     console.log('I am not leaving my house and you cannot make me')
// }


// let userName = "myUsername";
// let password = "myPassword";

// // if (userName === "myUsername" && password === "myPassword") {
// // console.log(`Welcome back,${userName}. You're logged in`);
// // } else if (userName === "myUsername") {
// //     console.log('Your user name is correct, but you have the wrong password');
// // } else {
// //     console.log('You are not in our database, would you like to sign up?');
// // };


// //SWITCH STATEMENTS


// // /*Execute a block of code depending on the CSSNamespaceRule; condition meet? check against cases use case (Condition): - starts code block
// // break- to end that code
// // Example: Fizz Buzz
// // default-code code to be ran if no casses are meet
// // */

// // let favColor = 'green';

// // switch (favColor) {
// //     case 'blue':
// //         console.log('Blue like the sky');
// //         break;
// //     case 'red'
// //     console.log('Red like a rose');
// //     break;
// //     default:
// //         console.log(`${favColor} is beautiful too`);
// // }

// let doYouLikePizza = 'yes'

// switch (doYouLikePizza) {
//     case 'yes':
//     case 'yeah':
//     case 'duh':
//         console.log('Me too! I love Pizza');
//         break;
//     case 'no':
//     case 'nope':
//     case 'nah':
//         console.log('Oh whatever')
//         break;
//     default:
//         console.log('Roooaar');
// }


//TERNARY
// cONCISE WAY TO CHECK TWO(OR MORE) CONDITIONS USING THE SYNTAX OF ? AND :
// sTRUCTURE:
// //(Condition) ? (codetorumiftrue/truthy) : (codetoruniffalse?falsy)

// let temp = 70;
// //Ternary
// (temp > 75) ? console.log('Indiana summer temps') : console.logo('Indiana spring time'); 

// //Instead of
// if (temp > 75) {
//     console.log('summer')
// } else {
//     console.log('spring')
// };

// let num = 13;

// (num > 0) ? console.log('Positive Number') :
//     (num < 0) ? console.log('Negative Number') :
//     console.log('Number is 0, neutral');


//LOOPS
// For loop-a quickand easy way to iterate or "loop" over something, to do it repeatedly
// infinate loops are possibile(best to avoid): ctrl + c, or close VSC
// loop take in three parameters , each seperated by a semi colon:
//1. initial expression
//2. condition
//3. increment(or decrement) expression

// (1) ; (2) ; (3)
// for (i = 0; i <= 10; i++) {
//     console.log(i);
// }

//To decrease by 1 use i--
// for (i = 2; i >= 0; i--) {
//     console.log(i);
// }

// //Challenge: use a for loop to count to 20, but by 2's
// for (i = 0; i <=20; i += 2) {
//     console.log(i)
// }

//Printing each letter with a loop
let word = "Fantastic";

for(let i = 0; i < word.length; i++){
 //   console.log(i);// printing the numerical index of the strings letter
    console.log(word[i]); // square brackets are used to get the letter itself(value of index)
}