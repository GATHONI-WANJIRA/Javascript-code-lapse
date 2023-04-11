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



/* Length of a string
*/

var country = "Jamaica";
var length = country.length;
console.log(length);

var firstName = "Janet";
var firstNameLength = firstName.length;
console.log(firstNameLength);

// First letter in a string 
// Always begin by setting which type of a variable you expect. Whether string or number etc
// With a blank tab ie first line

var firstLetterFirstName = "";
var firstName = "Botanica";
var firstLetterFirstName = firstName[0]
console.log(firstLetterFirstName);


// String Immutability.
// strings value cannot be changed.
// You cannot replace a letter on a string eg;

var myCity = "Nairobi";
myCity[2] = "S"

// This will outright cause an error since you cannot alter strings.
