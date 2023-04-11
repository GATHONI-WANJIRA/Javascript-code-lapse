// Inline comment. Setting up javascript.

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


// INITIALIZING VARIABLES
// Initializing variables is assigning them a value.
var a = 9;
var b = 8;

// Variables are case sensitive. Always use camelCase which basically means that the first case will always be small. eg

var properCamelCase = ("This");

// ADDING NUMBERS

var sum = 10 + 12;


// Declaring String variables.

var myName = "Noni";
var myPet = "Pete";
var tot = myName + myPet;
console.log(tot);



/* LENGTH OF A STRING
*/

var country = "Jamaica";
var length = country.length;
console.log(length);

var firstName = "Janet";
var firstNameLength = firstName.length;
console.log(firstNameLength);

// FIRST LETTER IN A STRING. 
// Always begin by setting which type of a variable you expect. Whether string or number etc
// With a blank tab ie first line

var firstLetterFirstName = "";
var firstName = "Botanica";
var firstLetterFirstName = firstName[0]
console.log(firstLetterFirstName);


var firstName = "Noni";
var secondLetterFirstName = firstName[1]
console.log(secondLetterFirstName);


var town = "Rongai";
var lastLetterTown = town[town.length - 1];
console.log(lastLetterTown);




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
    result = "Kenya" +" "+ noun +" "+ Adjective +" " + verb +" "+ adverb + "."
    return result;
}
console.log(wordBlanks("is", "very", "hot", "today"));
