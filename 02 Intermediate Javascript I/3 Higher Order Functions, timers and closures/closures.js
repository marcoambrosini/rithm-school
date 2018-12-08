/* jshint esversion: 6 */
//What is a closure?
// a closure is a function that is nested into a parent function and uses a variable declared in the parent function, even if the parent function has already returned.

//List two reasons why closures are useful
//1) we can make the declared variable private; 2)

//What is a module?
//it's a piece of encapsulated reusable code

//What is the arguments array-like object?
// it's a sort of array that contains the argument passed in at the function call 

//Why do we call arguments an array-like-object?
//because we can use some array methods on it but it's not an actual array;

//Write a function called createCounter. This function should contain a variable count that is initialized to 0. This function should return another function that when invoked, increments the counter by 1 and returns the count variable. You should be able to create multiple counters with the createCounter function and they should all have their own private variable called count.

function createCounter() {
    let count = 0;
    return function(){
        count++;
        return count;
    };
    
}

var firstCounter = createCounter();

firstCounter(); // 1
firstCounter(); // 2
firstCounter(); // 3
firstCounter(); // 4

var secondCounter = createCounter();

secondCounter(); // 1
secondCounter(); // 2
secondCounter(); // 3

firstCounter(); // 5
firstCounter(); // 6

secondCounter(); // 4

