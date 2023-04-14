//ARRAYS
/* Arrays are a collection of values which can be booleans,strings,numbers objects etc that are stored on a single variable.
Use square brackets.
When we have more than one array in an array its called multi dimension array.
Remember to always put speech marks to each array due to indexing
 */

// Example

var fruits = ["mango", "apples", "bananas", "cherries"];
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
var shoppingList = [["milk", 3], ["flour", 2], ["eggs", 6], ["bananas", 5]]
console.log(shoppingList);
//prints out the shopping list [ [ 'milk', 3 ], [ 'flour', 2 ], [ 'eggs', 6 ], [ 'bananas', 5 ] ].


// NESTED ARRAYS.
// This happens when an array has elements which themselves are arrays.

var subjects = ["Maths", "History", ["Chemistry" , "paper1" , "paper2" , "paper3"] , "CRE" , "Busines"]

console.log(subjects[2][2]);
// Prints out paper2 since we accessed the [2] index which is chemistry and [2] index inside chemistry which is paper2.