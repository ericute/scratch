/**
 * Given an array of numbers, exactly what number is a duplicate
 */
function findDupes(numberArray) {
    let dupes = [];
    let nonDupes = [];
    for (let i in numberArray) {
        if (nonDupes.indexOf(numberArray[i]) == -1) {
            nonDupes.push(numberArray[i]);
        } else {
            if (dupes.indexOf(numberArray[i]) == -1) {
                dupes.push(numberArray[i]);
            }
        }
    }
    console.log(dupes);
    console.log(nonDupes);
}

findDupes([1, 1, 2 ,3]);

function findDupesv2(numberArray) {
    let dupes = [];
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray.lastIndexOf(i) != i) {
            //dupes.push(numberArray[i]);
            if (dupes.indexOf(numberArray[i]) == -1) {
                dupes.push(numberArray[i]);
            }
        }
    }
    return dupes;
}
console.log(findDupesv2([1,1,2,3,4,4]));