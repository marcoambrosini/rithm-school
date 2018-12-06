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

//person;