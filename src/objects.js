// Objects are similar to arrays but instead of using indexe to access the other you use properties.
// They are also defined by calibraces not square brackets like arrays.

var myDog = {
    // On the left we have properties of my dog while on the right we have the values.
    names :"Scoby Liam",
    age : 2,
    color : "white",
    breed : "german",
};
// Accessing the properties using dot notation.
console.log(myDog.breed);

// Accessing the properties using bracket notation.
console.log(myDog["color"]);

// Accessing Object properties with variables.
// Create a new variable X with a new name (dogName) and then assign it one of the properties.
// Create a new variable Y with another new name (dogsName) and then assign it to the object name while calling the previous variable X created.
var dogName = "names";
var dogsname = myDog[dogName];
console.log(dogsname);

// Prints out scoby liam since that our dog's name.

// Updating Object Properties.

myDog.names = "New Name Malik";
console.log (myDog.names);

// Adding new properties to my object.

myDog.bark = "bark bark bark";
console.log(myDog.bark);

// Deleting properties from an object.

delete myDog.age;
console.log(myDog);
// It prints out the whole object but now without the bark property

// Testing Objects for Properties.
// You can test if an object has a specific property by using "hasOwnProperty()" method as shown.
// This method returns a boolean value whether true or false.

console.log(myDog.hasOwnProperty("names"));
// Returns true since we have a property by word "names".

console.log(myDog.hasOwnProperty("email"));
// Returns false since we dont have a property by word "email".

// NESTED OBJECTS.
// An object can have properties that are themselves objects and thats what is called nested objects.
// Check out chemistry below.

var subjects = {
    Maths : 70 ,
    History : 50,
    chemistry : {
        paper1 : 46 ,
        paper2 : 48 ,
        paper3 : 32 ,
    },
    English : 50 ,
}
console.log(subjects.chemistry.paper2);

// It prints out 48 as assigned on chemistry paper 2.



// OBJECTS FOR LOOKUPS.
// An object for a lookup is a data structure that is used to quickly retrieve data from a set of values based on a specific key.

function capitalsLookup (capitals) {
     var city = "";

    var country = {
        "Kenya" : "Nairobi" ,
        "Tanzania" :"Dodoma" ,
        "Rwanda" : "Kigali" ,
        "Eritrea" : "Asmara" ,
        "Uganda" : "kampala" ,
        "Mauritius" : "port-louis" ,
    
    };

    city = country[capitals];
    return city;

}

    
 console.log(capitalsLookup("Kenya"));
//  Output is Kampala.


// RECORD COLLECTIONS.
// used for data management and manipulation concepts



