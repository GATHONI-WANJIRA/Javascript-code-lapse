// REUSABLE FUNCTIONS.
// They normally prints out what is assigned as its value everytime its called.
function reusableFunction() {
    console.log("Hello world");
}
reusableFunction();
reusableFunction();
reusableFunction();

//It prints out;
//  Hello world
// Hello world
// Hello world

// I have called the 'reusableFunction' 3 times hence hello world * 3.


// ARGUMENTS.

function totalNumber(a, b) {
    console.log(a + b);
}
totalNumber(6, 8);
// Prints out 14. if it was any sign be it /,* or any other as long as its written correctly it would still be the appropriate figure.


// SCOPE.
// Scope in javascript refers to the area of a program where a variable or a function can be accessed.


// GLOBAL SCOPE.
// This refers to variables and functions that can be accessed from anywhere in the program including within functions.
// When a variable or function id defined outside of any function.
var globalVariable = "i am a global variable";

function globalFunction() {
    console.log(globalVariable);
}

globalFunction();
// Prints out "i am a global variable" 
// Global variables are simply variables and sometimes functions that are not within functions.

var globalName = ("Kobe Bryant.");

function lakersGlobal() {
    console.log(globalName);
}

lakersGlobal();

//Prints out Kobe Bryant.


// LOCAL SCOPE.
// This refers to the inner most scope of variables and functions that are declared inside a block, a function or a module.
// When a function or a variable is declared inside a block it means that it cannot be accessed outside that local scope or block/function.


function myNames() {
    var secondName = ("Gathoni");
    console.log(secondName);
}

myNames();
// Prints out Gathoni since we have called a variable that is within the function.
// My variable(secondName) is declared inside my function (myNames).

function localTown() {
    var myLocalTown = "Limuru";
    console.log(myLocalTown);
}

localTown();
// It prints out Limuru since the variable called is inside the function called.

// console.log(myLocalTown);

// The above does not work since you cannot access the variable while outside the function.


// LOCAL NESTED SCOPE.
// This means that a function can contain another function within its own local scope.
// In this case the inner function can access variables named in its outer function while the outer function cannot access variables in the inner function.

// Step 1; The following is my outer function
function outerFunction() {
    var myOuterVariable = "hello from outer function";

    // Step 2; inner function calling the outer variable.
    function innerFunction() {
        var myInnerVariable = "hello From inner function";
        console.log(myOuterVariable);
    }
    // The above prints out hello from the outer function since it can access it unlike the outside one which cannot access the inner one.
    innerFunction();

    // For outer function now which should refuse to work since it cannot access the inner variable.
    //     console.log(myInnerVariable);

}
// outerFunction();


// RETURN VALUE FROM FUNCTION.

function minusTen(num) {
    return num - 10;

}
console.log(minusTen(40));
// It prints out 30.


function addNumbers(a, b) {
    return a + b;
}
// Call the function and assign the return value to a variable.
let sum = addNumbers(5, 9);
console.log(sum);
// It prints out 14.

// STAND IN LINE.
// You can use an array to implement a "QUEUE" data structure to manage a line of items and people waiting for a service.
// This is achieved by removing the first item on the array and adding a new item at the end through shift().

// Initialize an empty function
// "array reps that its an array." "item is the number of items inside."

function nextInline(array, item) {
    // "array.push(item)...-Means that we add one item at the end of testArray and print out the new formed array"
    // "array.shift()" ...Means that we remove the first item in the testArray and return (prints out the removed item).
    array.push(item);
    return array.shift();
}
// Testing variable array.
var testArray = [1, 2, 3, 4, 5];

console.log("Before" + JSON.stringify(testArray));
console.log(nextInline(testArray, 6));
console.log("After" + JSON.stringify(testArray));

// The first statement authorises printing out of the testArray variable just like it is initially.
// second one adds 6 as an item and removes the first item rapidly as well while printing the after math.

function nextAge(array, age) {
    array.push(age);
    return array.shift();

}
var testAgeArray = [20, 30, 40, 50, 60];

console.log("before" + JSON.stringify(testAgeArray));
// Prints out the before change of the array.
console.log(nextAge(testAgeArray, 70));
// The above calls the function, which contains both the push and shift element then assigns them to the array and assigns 70 as the new age.
console.log("after" + JSON.stringify(testAgeArray));
// This now adds 70 through push method and removes 20 through shift method.
