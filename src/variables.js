/* DATA TYPES AND VARIABLES.
They are 7 and they include the following...
Number,String,Boolean,Undefined,Null,Object,Symbol.
*/

/**Declaring Variables ft assigning
 There are only 3 ways to declare a variable....
 var,let,const.
 */

var myName = ("xxxxxxxx"); //Declaring Variables
var myName;// Assigning Variables

// VARIABLES AND LET KEYWORDS.

// 1.REDECLARATION.
// Variables declared with var can be redeclared within the same scope without causing an error while you cannot have 2 variables declared with let in the same scope.

//2.STRICT-MODE.
// Let is only declared in strict mode while var can be used either way.

// 3.SCOPE
// Variables declared with var are function scoped meaning they can only be accessed within the function they are defined in or in a global scope if not in a function.
// Var declared with let are only accessible to the code block or expression that they are declared in

// 4.HOISTING
// Variables declared with var are positioned ontop of the function or on the global scope meaning they can be accessed before they are declared and their value is null until they are assigned a value.
// Variabes declared with let can be positioned on top of the function too although you cannot access them until they are declared.




// INITIALIZING VARIABLES
// Initializing variables is assigning them a value.
var a = 9;
var b = 8;


// ADDING NUMBERS

var sum = 10 + 12;
console.log(sum);
// prints out 22


// Declaring String variables.

var myName = "Noni";
var myPet = "Pete";
var tot = myName + myPet;
console.log(tot);
// prints out Nonipete



// LENGTH OF A STRING
var country = "Jamaica";
var length = country.length;
console.log(length);
//prints out 7


var firstName = "Janet";
var firstNameLength = firstName.length;
console.log(firstNameLength);
// prints out 5 


// Always begin by setting which type of a variable you expect. Whether string or number etc
// With a blank tab ie first line

var firstLetterFirstName = "";
var firstName = "Botanica";
var firstLetterFirstName = firstName[0]
console.log(firstLetterFirstName);
// prints out B


var firstName = "Noni";
var secondLetterFirstName = firstName[1]
console.log(secondLetterFirstName);
// Prints out o


var town = "Rongai";
var lastLetterTown = town[town.length - 1];
console.log(lastLetterTown);
// print out i


// STRING IMMUTABILITY..
// strings value cannot be changed.
// You cannot replace a letter on a string eg;

var myCity = "Nairobi";
myCity[2] = "S"

// This will outright cause an error since you cannot alter strings.


// WORDBLANKS
// They are used to practice string concatation with substitutes of variables in javascript.

function wordBlanks(noun, Adjective, verb, adverb) {

    var result = "";
    result = "Kenya" + " " + noun + " " + Adjective + " " + verb + " " + adverb + "."
    return result;
}
console.log(wordBlanks("is", "very", "cold", "today"));
// Prints out Kenya is very cold today .


// Generate RANDOM FRACTIONS. 

let randomFraction = Math.random();
console.log ("Random fraction is " + randomFraction);

// We use (Math.random) method to generate a number between 0-1. 0 inclusive.


// GENERATE RANDOM WHOLE NUMBERS.

let randomWholeNumber1 = Math.floor (Math.random() * 100 ) + 1;
console.log("Random whole number is " + randomWholeNumber1);

// We use (Math.floor) to round down the result of (math.random () * 100) which gives us a random number between 0-99, then  we add 1 to ensure the result is 0-100.
// You can change the range of the whole number by adjusting the arguments inside. eg

let randomWholeNumber2 = Math.floor (Math.random() * 49 ) + 1;
console.log("Random whole number is " + randomWholeNumber2);

// Output is any number below 50.

// CONST KEYWORD.
// Const is used to declare variables whose values cannot be reassigned.eg pi=3.14
// Once a variable is declared with const, it cannot be changed unless its an object.


// DEFAULT PARAMETERS.
// Default parameters allow you to specify default parameters incase they are not put when the function is called.

function multiply (a , b = a * 3){
    return (a * b);
}
console.log(multiply(10));
// Output is 300.

// 3, is the default value .... a is 10.... for execution to get b you multiply a * 3= (10 * 3) and you get 30 which in return when you multiply it by 10 (a) you get 300.


function greet(name = "friend"){
    console.log("hello" + name + "!");
}

greet();

// Output is (Hellofriend)  since theres no name assigned while calling the function.

greet("Janette");

// Output is (hellojannette!) since we have assigned the name janette in the function parameter name.




