/* jshint esversion: 6 */

//iterators: array methods that can be used with for loops

//array.foreach(function(val, idex, arr))
//always returns undefined, no need to supply all three args to the callback.

//Now let's try to use forEach to solve a problem. Write a function called double which accepts an array. The function should return a new array with all of the values doubled. 

let testarray = [1,2,3,4];

function double(arr) {
    let newArr = [];
    arr.forEach((x) => {
        newArr.push(x * 2);        
    });
    return newArr;

}

//double(testarray);


//Write a function called printFirstAndLast which accepts an array (of objects) and console.logs a new string with the first character and the last character of each value.
printFirstAndLast = function(arr) {
    arr.forEach((x) => {
        console.log(x[0] + x[x.length-1]);
    });
};

//printFirstAndLast(['awesome','example','of','forEach']) 

// ae
// ee
// of
// fh



//Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value have been added to each object in the array.

addKeyAndValue = function(arr, key, value) {
    arr.forEach(x => {
        x[key] = value;
    });
    return arr;
};

//addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true); 

/*
[
    {
        name: 'Elie',
        isInstructor: true
    },
    {
        name: 'Tim',
        isInstructor: true
    },
    {
        name: 'Elie',
        isInstructor: true
    }
]
*/


//MAP, has the same structure of forEach array.map(callback(val, index, arr)), but returns an array of the values returned in the callback;


//Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
valTimesIndex = function(arr){
    return arr.map((x, i) => x * i);
};


//valTimesIndex([1,2,3]) // [0,2,6]
//valTimesIndex([5,10,15]) // [0,10,30]



//Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:

//extractKey = function(arr, key) {
//    return arr.map (x => x[key]);
//};

//extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name");

// ["Elie", "Tim", "Matt"]



//FILTER array.filter(callback(element, index, array)). same structure as the other two. Like map, it returns a new array but in this case the callback must return true or false. If true, the current element will be added to the new array, otherwise it'll be despreciated.

//Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive

filterLetters = function(arr, letter){
    return arr.filter(x => {
       return (x === letter || x === letter.toUpperCase() || x === letter.toLowerCase());
    }).length;
    
};

//filterLetters(["a","a","b","c","A"], "a"); // 3
//filterLetters(["a","a","b","c","A"], "z"); // 0
//filterLetters(["a","a","b","c","A"], "B"); // 1

//Write a function called filterKey which accepts two parameters, an array of objects, and the name of a key and returns an array with only those objects which have truthy values for that key:

filterKey = function(arr, key){
    return arr.filter(x => {
        return x[key];
    });
};

//filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious");

// [{name: "Tim", isInstructor:true, isHilarious:true}]




//REDUCE The purpose of reduce is to take an array and REDUCE it to a single value.
// arr.reduce(callback[, initialValue]). The start parameter is what differs from the previous methods. If it's not specified it defaults as the first element of the array. It's also called 'previous' or 'accumulator'. The reduce method executes the callback function over and over on the first 2 elements of the array. The callback returns one value out of the two, which will be used as the start parameter for the next iteration. The reduce method returns just one final value.


//Exercises

//Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:

extractKey = function(arr, key) {
    return arr.map((a) => a[key]);
};

//extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name");

// ["Elie", "Tim", "Matt"]


//Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive. 

//filterLetters(["a","a","b","c","A"], "a"); // 3
//filterLetters(["a","a","b","c","A"], "z"); // 0
//filterLetters(["a","a","b","c","A"], "B"); // 1


//Optional Bonus

//Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value has been added. You can do this a few ways, either by reducing starting with an empty array and making copies of the object or by starting with the actual array!

addKeyAndValue = function(arr, key, value) {
    for (let i of arr) {
        i[key] = value;
    }
    return arr;
};  


addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true);

/*
[
    {
        name: 'Elie',
        isInstructor: true
    },
    {
        name: 'Tim',
        isInstructor: true
    },
    {
        name: 'Elie',
        isInstructor: true
    }
]
*/

