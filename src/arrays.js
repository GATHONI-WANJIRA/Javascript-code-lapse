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

var subjects = ["Maths", "History", ["Chemistry", "paper1", "paper2", "paper3"], "CRE", "Busines"]

console.log(subjects[2][2]);
// Prints out paper2 since we accessed the [2] index which is chemistry and [2] index inside chemistry which is paper2.


// PROFILE LOOK-UP
// involve searching through an array of objects containing profile information for a specific person based on a given criteria such as their name or ID. 

// Create an array with objects inside.
// let profiles = [
//     {
//         "id": 6061,
//         "name": "liam",
//         "occupation": "coder",
//         "age": 21,
//     },
//     {
//         "id": 6062,
//         "name": "lilo",
//         "occupation": "marketer",
//         "age": 22,
//     },
//     {
//         "id": 6063,
//         "name": "Ricky",
//         "occupation": "farmer",
//         "age": 23,
//     },
//     {
//         "id": 6064,
//         "name": "lily",
//         "occupation": "actress",
//         "age": 25,
//     }
// ];

// Define a function to search for a profile based on name or id.

// function profileLookUp(jina, prop){
//     for (m = 0; m < profiles.length; i++){
//         if (profiles[m].name === jina){

//         }

//     }

// }


// REST OPERATOR.
// It is used to represent an indifinite number of elements in an array and it is denoted by (...digits) three dots and the name of a parameter
// It allows a function to have as many numbers of a parameter as it can

function sum (...numbers){
    let total = 0;
    for (let number of numbers){
        total+=number;
    }
    return total;
}
console.log(sum(4,4,4,4));

// Output is 16 since it totals up all the numbers (sum).


// SPREAD OPERATOR.
// Its is used to spread the contents of an iterable object ie, array or object into another iterable object or another function argument list.

// It is often represented by three dots only (...) .


// To spread an array into another array

const array1 = [1,2,3,4,5];
const array2 = [...array1 , 6,7,8,9,10];
console.log(array2);

// To spread an object into another object.

const tens1 = {  "tens1" : 10, "tens2" : 20,"tens3" : 30, "tens4" : 40 ,}
const tens2 = {...tens1,"tens5" : 50,"tens6" : 60,"tens7" : 70, "tens8" : 80,}
console.log(tens2);

// Output is all the contents of tens1 and tens2 combined.

// To spread an array into a function.

function myFunction (x,y,z){
    console.log(myFunction);
}

const array = [1,2,3];
myFunction(...array);


// To copy an array or an object.

const origiArray = [1,2,3,4];
const copyOrigiArray = [...origiArray];
console.log(copyOrigiArray);

// Output is the elements of the original array copied.