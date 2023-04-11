//ARRAYS
/* Arrays are a collection of values which can be booleans,strings,numbers objects etc that are stored on a single variable.
Use square brackets.
When we have more than one array in an array its called multi dimension array.
Remember to always put speech marks to each array due to indexing
 */

// Example

var fruits = ["mango" , "apples", "bananas" , "cherries"];
var result = fruits;
console.log(result);
// prints out all the fruits.



// Array Indexing
var firstFruit = fruits[0];
console.log(firstFruit);
// Prints out mango.



// Array Modification
fruits[2] = "Kiwi";
console.log(fruits);
// prints out [ 'mango', 'apples', 'Kiwi', 'cherries' ]



// PUSH() method on arrays.
// It is used to add a new element at the end of an array.
fruits.push("pears");
console.log(fruits);
// prints out [ 'mango', 'apples', 'Kiwi', 'cherries', 'pears' ]


//POP() Method on arrays.
// It is used to remove the last element on an array.
var lastFruit = fruits.pop(-1);
console.log(lastFruit);
// Prints out the lastfruit that has been removed (pears).


// SHIFT method on arrays.
// It is used to REMOVE the FIRST element on an array and return it to the new assigned variable.
// This changes the default indexing of an array elements
var firstFruit = fruits.shift();
console.log(firstFruit);
// prints out mango as its the first fruit and the one to be removed.
console.log(fruits);
// Prints out[ 'apples', 'Kiwi', 'cherries' ]


// UNSHIFT Method on arrays.
// It adds one or more elements to the BEGINNING of an array.
var addedFruits = fruits.unshift("ovacado");
console.log(fruits);
// prints out [ 'ovacado', 'apples', 'Kiwi', 'cherries' ]


// SHOPPING LIST ARRAY
// This is basically arrays inside an array.
var shoppingList = [["milk" ,3], ["flour", 2], ["eggs" ,6], ["bananas" ,5]]
console.log(shoppingList);
//prints out the shopping list [ [ 'milk', 3 ], [ 'flour', 2 ], [ 'eggs', 6 ], [ 'bananas', 5 ] ].


// REUSABLE FUNCTIONS.
// They normally prints out what is assigned as its value everytime its called.
function reusableFunction(){
    console.log("Hello world");
}
reusableFunction ();
reusableFunction ();
reusableFunction ();

//It prints out;
//  Hello world
// Hello world
// Hello world

// I have called the 'reusableFunction' 3 times hence hello world * 3.


// ARGUMENTS.

function totalNumber (a ,b){
    console.log(a+b);
}
totalNumber (6,8);
// Prints out 14. if it was any sign be it /,* or any other as long as its written correctly it would still be the appropriate figure.


// SCOPE.
// Scope in javascript refers to the area of a program where a variable or a function can be accessed.


// GLOBAL SCOPE.
// This refers to variables and functions that can be accessed from anywhere in the program including within functions.
// When a variable or function id defined outside of any function.
var globalVariable = "i am a global variable";

// function globalFunction (){
    console.log(globalVariable);


// globalFunction();















