// Lets get into loops!
// WHILE LOOPS.

// While loop is a control flow statement that gets excecuted as long as the specified condition is true.


let x = 0;
while (x < 10) {
  console.log(x);
  x += 2;
}

// it prints out 0,2,4,6,8.
// 1. it prints out 0 because x (0) is less than 10.
// 2. then it adds 2 to that zero x & creates (new X == 2).Because 2 is less than 10 it prints out (new X)which in this case is 2.
// 3. Since the new X (2) is less than 10 still it adds 2 to make 4 which becomes a new x and it prints out 4 since its still less than 10.
// This chain continues while adding on 2 until it breaks when the value of the x gets to 10.



// FOR LOOPS.
// This is a control flow statement that allows you to execute code for a fixed number of times or a set sequence of values.

// for (initialization; condition; increment) {
//     // code block to be executed
//   }
  
//   The "initialization" part is executed before the loop starts and initializes one or more variables in the loop.
//  The "condition" part is evaluated before each iteration of the loop and it returns boolean values.
// The "increment " part is only executed once the condition is true until its false.

for (let i = 2;  (i <= 5); i++ ) {
    console.log(i);
}
// Output is 2,3,4 ,5.


// ODD NUMBERS WITH A FOR-LOOP.

for (let i = 1; i <= 10; i+=2){
    console.log(i);
}

// Output 1,3,5,7,9.

// COUNT BACKWARDS WITH A FOR-LOOP 

for (let i =10; i>= 0; i--){
    console.log(i);
}
// Outputs 10 all the way to 0.