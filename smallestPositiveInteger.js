// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let sorted = A.sort();
    let storage = {};
    
    // Store sorted Array in a json using the value as the key
    for (let i = 0; i < sorted.length; i++) {
        storage[sorted[i]] = sorted[i];
    }
    
    // If the storage does not contain the key from the loop below, return the key
    for (let i = 1; i < 1000001; i++) {
        if (!storage[i]) return i; 
    }
    
    return 1;
}