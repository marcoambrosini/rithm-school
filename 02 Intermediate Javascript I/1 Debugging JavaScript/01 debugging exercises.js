//*What does the throw keyword do?

//it throws an error 

//*What does the finally keyword do?

//in a try - catch sequence, you can add the finally section at the end followed by curly braces. The expression inside the curly braces will be executed independently of the outcome of try - catch

//*What is the difference between a TypeError and ReferenceError?

//a type arror is thrown when trying to access undefined properties of an object or invoking something that is not a function; a reference error is thrown when we try to access a variable that doesn't exist in the current scope.

//*How do you create a snippet in the Chrome dev tools?

//open the dev tools, go to the source tab, select snippets and click plus.

//*In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button which allows you to "pause on caught exceptions." What is an exception? 

//an exeption is an error that is thrown during runtime.

//*How do we "catch" errors in JavaScript? Give an example with code for what that might look like.

    function fn() {
    try {
        Math.random() * a; //a is not defined so a reference error will be thrown
    } catch(e) {
        console.log("there's an error here");
    } finally {
        console.log('I will be executed no matter what');
    }
}

fn();


//*Explain what type of error will be thrown, why the error is occuring, and how to fix it:



//1)
person;
// reference error: person is not defined

//2)
var data = {};
data.displayInfo();
//Type error, the second line is calling a function inside the object 'data' but  the punction doesn't exist. "TypeError: data.displayInfo is not a function"

//3 
var data = {};
data.displayInfo.foo = "bar";
//display error, the second line is trying to set the property foo of an undefined supposed object (displayinfo)

//4
function data(){
    var thing = "foo";
}
data();
thing;
//Reference error. Thing is undefined in the global scope. The scope of it is the data function.


//Part II
//Fix the broken code and explain what was wrong:

//1
for(var i=0; i > 5; i++){
    console.log(i);
}
//this loop won't even start because the condition is not true at the first iteration (i is less than five)
//FIXED
for(var i=0; i < 5; i++){
    console.log(i);
}   

//2
function addIfEven(num){
    if(num % 2 = 0){
        return num + 5;
    }
    return num;
}
//the code uses the assignment operator instead of the equality operator
//FIXED
function addIfEven(num){
    if(num % 2 === 0){
        return num + 5;
    }
    return num;
}

//3
function loopToFive(){
    for(var i=0, i < 5, i++){
        console.log(i);
    }
}
//the code uses commas in the loop statement instead of semicolons
//FIXED
function loopToFive(){
    for(var i=0; i < 5; i++){
        console.log(i);
    }
}

//4
function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i=0; i<numbers.length-1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // should return [2,4,6,8] 
//there's an unexpected semicolon at the end of the loop final declaration and in the if statement the assignment operator is used instead of the equality one. The numbers inside the if statement is mnissing the index 'i' and the push method argument should be 'numbers[i]'. Finally, the return statement should be out of the for loop otherwise it's going to stop the execution of the function at it first iteration. There's an unespected semicolon after the if statement condition.
//FIXED
function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
    }        return evenNumbers;

}
displayEvenNumbers();