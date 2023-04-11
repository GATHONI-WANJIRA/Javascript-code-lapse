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



// Push() method on arrays.
// It is used to add a new element at the end of an array.
fruits.push("pears");
console.log(fruits);
// prints out [ 'mango', 'apples', 'Kiwi', 'cherries', 'pears' ]


//pop() Method on arrays.
// It is used to remove the last element on an array.
var lastFruit = fruits.pop(-1);
console.log(lastFruit);
// Prints out the lastfruit that has been removed (pears).











