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


// RETURN EARLY PATTERNS FOR FUNCTIONS.

function examplefunc(values) {

    if (values != 0) {

        return "loaded";
    }
    else {
        return "Invalid";
    }
}
console.log(examplefunc(9));
// Prints out loaded as it is executed early into the function.



// COUNTING CARDS FUNCTIONS.
// It works in that when you see a high count , the card goes up...low card the count goes low and the middle card the count stays the same.
// When the count is positive the player should bet high, when negative or 0 the player should bet low.You use switch statement functions.


// Cards(case) 2-6 have a value of +1
// Cards 7-9 have a value of 0
// Cards 10-Ace have a value of -1

function countCard(card) {
    switch (card) {

        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return +1;
        case 7:
        case 8:
        case 9:
            return 0;
        case 10:
        case 11:
        case "J":
        case "Q":
        case "K":
        case "A":
            return -1;
        default:
            return "Invalid card";

    }

}
console.log(countCard(17));
// It prints out invalid card since 17 is not defined in the cards
// Default means any other value not defined in the switch statements should give invalid card.
// J,Q,K,A Means Jack, Queen, King, Ace.


// parseINT () FUNCTIONS.
// It is used to pass a string and convert it into an integer.
// The function takes two arguments. First is the string then the radix which presents the base numeral figure in math system of the number to be returned as shown.
// The basic structure.


// parseInt(String,radix);


// Example

let string = "123";
let num = parseInt(string);
console.log(num);

// Output is 123 which is nolonger a string but a number.

let stringFigure = "1010";
let number = parseInt (stringFigure,2);
console.log(number);

// Output is 10 and In this example, the parseInt() function is called with the string "1010" as its first argument and the radix of 2 as its second argument. The function returns the integer value 10, which is the binary representation of the number 1010.


// ARROW FUNCTIONS.
// They are a shorthand syntax for writing anonymous functions in javascript.

const summation = (a,b) => a + b;
console.log(summation(3,6));

// Output is 9


const diffrence = (c,d) => d-c;
console.log(diffrence(6,9));

// Output is 3.


const square = (numSquare) => numSquare * numSquare;
console.log(square(8));

// Output is 64.


const message = () =>
console.log("Hello guys");
message();


// FILTER METHODS.
// They are methods that allow you to filter elements in an existing array and return a new array with only elements that fits the criteria for the new array.


let numbers = [1,2,3,4,5,6,7,8,9];

// Num function represents individual elements in the array that will be checked to see if they are divisible by 2.

let evenNumbers = numbers.filter(function(num){
    return (num % 2 === 0);


});
console.log(evenNumbers);

// Output is [2,4,6,8]


let digits = [2,8,10,14,59,86,45];

let greatDigits = digits.filter(function(digitNumber){
    return (digitNumber > 10);

})
console.log(greatDigits);

// Output [14,59,86,45] ... All numbers greater than 10.



// MAP METHODS.
// Map () is used to create a new array by applying a new function to each element in the array.


let origiArray = [2,4,6,8,10];
let newArray = origiArray.map(function(currentValue){
    return(currentValue * currentValue);
});
console.log(newArray);

// Output is [4,16,36,64,100] which is the squares of each currentValue in the original array.

// GETTERS AND SETTERS 
// This are functions that are used to retrieve and set the values of an object's properties.

const person = {
    firstname : "Noni",
    Lastname : "Gathoni", 

    get fullname() {
        return `${this.firstname} ${this.Lastname}`;
    }
};
console.log(person.fullname);


// Output Noni Gathoni

