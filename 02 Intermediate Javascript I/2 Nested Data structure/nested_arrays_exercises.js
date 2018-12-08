/*jshint esversion: 6 */

//Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.
function rotate(arr, num) {
    //for 'num' times 
    for (let i = 0; i < num; i++) {
        //pop the last element and unshift it to the first position
        arr.unshift(arr.pop());
    }
    return arr;
}

//rotate([1,2,3], 1); // [3,1,2]
//rotate([1,2,3], 2); // [2,3,1]
//rotate([1,2,3], 3); // [1,2,3]

//Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".

/* my attempt
function makeXOGrid(rows, columns) {
    let arr = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = [];
        for (let j = 0; j < columns; j++) {
            if (j % 2 === 0) {
                arr[i][j] = 'X';
            } else arr[i][j] = 'O';
        }
        console.log(arr);
        return arr;
    }
}
*/

//solution (copied)

function makeXOGrid(rows,amount){
    var finalArr = [];
    var startWithX = true; //this one is like an on off switch that we can use in the loop to know if we're going to use X or O. 
    for(var i=0; i<rows; i++){
        var newRow = [];
        for(var j=0; j<amount; j++){
            if(startWithX){
                newRow.push("X");
            }
            else {
                newRow.push("O");
            }
            startWithX = !startWithX;
        }
        finalArr.push(newRow);
    }
    console.log(finalArr);
    return finalArr;
}

makeXOGrid(1, 4);

/*/
[["X","O","X","O"]]
/*/

makeXOGrid(3, 2);

/*/
[["X","O"],
["X","O"],
["X","O"]]
/*/

makeXOGrid(3, 3);
/*/
[["X","O","X"],
["O","X","O"],
["X","O","X"]]
/*/