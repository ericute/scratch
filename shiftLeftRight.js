
//Source:
//https://stackoverflow.com/questions/16097271/shift-array-to-right-in-javascript

//Shift array to the left
let arr = [1, 2, 3, 4, 5, 6];
arr = arr.concat(arr.splice(0, 5)); //This means shift left 5x
console.log(arr);

//Shift array to the right
let arr = [1, 2, 3, 4, 5, 6];
arr = arr.concat(arr.splice(0, (arr.length - 1)));  //This means shift right 1x.
                                                    //If you want to shift 3x, use (arr.length-3)
console.log(arr);