/*jshint esversion: 6 */


//Given the following array, write a function called printEvens that console.logs all of the even numbers

var nestedArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
    [9, 10, 11, 12]
];

function printEvens(arr) {
    nestedArr.map(x => x.map(y => {
        if (y % 2 === 0) {
            console.log(y);
        }
    }));
}

//printEvens();

//Given the following array, write a function called sumTotal returns the sum of all numbers in the array

var nestedArr1 = [
    [1, 2],
    [3, 4],
    [5, 6]
];

function sumTotal() {
    let sum = [];
    sum = nestedArr1.map(x => x.reduce((a, b) => a + b));
    return sum.reduce((a, b) => a + b);
}

//sumTotal(); // 21


/* Given the following array, write a function called countVowels, which returns the count of all of the vowels in each string regardless of case. To see if a value is an array, you can not use typeof since that will return 'object', so one way to do this is by using the Array.isArray function.

var arr = [];
Array.isArray(arr); // true
Array.isArray("Hello"); // false
*/

var nestedArr = [
    "Elie",
    ["Matt", ["Tim"]],
    ["Colt", ["Whisky", ["Janey"], "Tom"]],
    "Lorien"
];

//the vowels count is declared outside the searchVowels function, otherwise it would be redeclared everytime the function called itself (it's recursive). I tried to declare it in the countVowels function before calling the searchvowels function but even if i declared it with the var keyword (the scope should be the entire function), the inner searchVowels function would not see it.
var vowels = 0;
function searchVowels(arr) {
    //iterating through each element of the array (or nested arrays in the subsequent calls)
    for (let i of arr) {
        //checking if the element i of the array is a string or another array
        if (typeof i === 'string') {
            //looping through the elements of the string
            for(let j of i) {
                //checking if the current element of the string is a vocal or not
                if (j === 'a' || j === 'e' || j === 'i' || j === 'o' || j === 'u' || j === 'A' || j === 'E' || j === 'I' || j === 'O' || j === 'U') {
                    vowels++;
                } 
            }
        //if the element i of the parent array is another array, the function calls itself and repeats everything on the  nested array (recursive)
        } else searchVowels(i);
    }
}


function countVowels (arr) {
    //I tried to declare it in the here function before calling the searchVowels function but even if i declared it with the var keyword (the scope should be the entire function), the inner searchVowels function would not see it.
    searchVowels (arr);
    return vowels;
}

countVowels(nestedArr);



/*  FIRST ATTEMPT
let vowels = 0;
function countVowels(arr) {  
        arr.map(a => {
            for (let i of a) {
                 if (Array.isArray(i)) {
                    countVowels(i);
                } else if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
                    vowels++;
                } 
                }
            }
        });
    console.log(vowels);
    return vowels;

}

countVowels(nestedArr); // 13
*/