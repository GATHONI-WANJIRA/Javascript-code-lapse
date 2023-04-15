// IF STATEMENTS
// Used to execute conditions.

let age = 25;
if (age > 25);
console.log("You can now date.");
// Prints out you can now date since the condition to be executed is true.

// ELSE STATEMENT.
// Else statement is conditional and only gets executed if the if statement is not true.

let yourAge = 20;

if (yourAge >= 50) {
    console.log("You can retire");
}

else {
    console.log("You cannot retire");
}
// Prints out you cannot retire since the condition is false.

// ELSE IF STATEMENTS.
// Always remember that else statements come after if and elseif


function debt(val){

    if (val >= 100){
    return "I'll pay the debt.";
} 
else if (val <= 100) {
    return "For go the debt.";
} 
 else {
  return "You are debt free.";
 }
}


console.log(debt(60));

// Remember the chronological order is if,else if, else.
// Else only gets executed should there be any foreign outcome from the first two outcomes expected and it doesnt have a condition.


// CHAINED IF ELSE STATEMENTS.
// This was an assignment from the freecode camp that i did and as lomg as it works perfectly i am assuming that i am right.


function items(value){

    if (value < 5 ){
        return "Tiny";
    }
    else if (value < 10 ){
        return "Small";   
    }
    else if (value < 20 ){
        return "Large";
    }
    else {
        return "Huge";
    }
}
console.log(items(40));

// I prints out Huge.


// SWITCH STATEMENTS.
// they are used in place of chained if statements.
// They execute different blocks of code depending on the value or expression given.


var day = 8;
switch (day){
    case 1:
        console.log("Today is on a monday");
        break;
        case 2:
            console.log("Today is on a tuesday");
            break;
            case 3:
                console.log("Today is on a Wednesday");
                break;
                case 4:
                    console.log("Today is on a thursday");
                    break;
                    case 5:
                        console.log("Today is on a friday");
                        break;
                        default:
                            console.log("Today is not a work day");

}

// RETURN BOOLEAN VALUES FROM FUNCTIONS.


function isEven(number){
    if (number % 2 ==0){
        return true; 
    }
    else{
        return false;
    }
    
}

console.log(isEven(9));
// Prints out false since the conditionis a lie ..it does not remain 0 after dividing with 2.


// TERNARY OPERATOR.
// This is a shorthand way of writing if statement on a single line of code.
// This is the pseudo code [condition ? value1 : value2]


let aNumber = 3;
let result = aNumber % 2 === 0? "evenNumber": "oddNumber";{
    console.log(result);
}
// Output is an OddNumber
// The program gets executed until the condition is true.


// MULTIPLE TERNARY OPERATOR.

let ages = 9;
let output = ages > 30 ? "An adult" : ages > 10 ? "A Teen " : "An infant" ;{
    console.log(output);
}

// Output is an infant since both condition one and two did not get executed.

