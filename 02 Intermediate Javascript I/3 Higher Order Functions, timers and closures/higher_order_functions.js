/* jshint esversion:6 */

// this function should accept 2 parameters, put them in!
function each(arr, fn){
    for (let i of arr){
        fn(i);
    }
}

/*TEST

each([1,2,3,4], function(val){
    console.log(val);
});
// Here is what should be output if you wrote the function correctly

// 1
// 2
// 3
// 4

each([1,2,3,4], function(val){
    console.log(val*2);
});

// Here is what should be output if you wrote the function correctly

// 2
// 4
// 6
// 8

*/

//Write a function called map which accepts two parameters: an array and a callback. The map function should return a new array with the result of each value being passed to the callback function. 

function map(arr, callback){
    let newArr = [];
    for (let i of arr){
        newArr.push(callback(i));
    }
    return newArr;
}

/* TEST
map([1,2,3,4], function(val){
    return val * 2;
}); // [2,4,6,8]
*/

//Write a function called reject which accepts two parameters an array and a callback. The function should return a new array with all of the values that do not return true to the callback. 

function reject(arr, callback) {
    let newArr = [];
    for (let i of arr) {
        if (!callback(i)) {
            newArr.push(i);
        }
    }
    return newArr;
}

reject([1,2,3,4], function(val){
    return val > 2;
}); // [1,2]

reject([2,3,4,5], function(val){
    return val % 2 === 0;
}); // [3,5]