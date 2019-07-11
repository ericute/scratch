/*

A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

class Solution { public int solution(int[] A); }

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].

*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/* My Initial solution
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    if (A.length == 1) {
        return (A[0] == 1) ? 1 : 0;
    }
    
    // Check for uniqueness
    let tempArr = A.filter(unique);
    
    if (tempArr.length != A.length) return 0;
    
    A = A.sort((a, b) => {
        return a - b;
    });
    
    
    for (let i = 0, j = 1; i < A.length; i++, j++) {
        
        // No point in traversing if first item is not 1
        if (j == 1 && A[i] != j) return 0;
        
        if (A[i] != j) return 0;
        
    }
    
    return 1;
    
}

function unique (value, index, self) {
  return self.indexOf(value) === index
}
*/

//PERFECT SOLUTION
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let tempSet = new Set();
    let max = 1;
    let min = 1;
    
    for (let i = 0; i < A.length; i++) {
        
        if (A[i] > max) max = A[i]
        if (A[i] < min) min = A[i]
        
        tempSet.add(A[i]);
        
    }
    
    let tempSetSize = tempSet.size;
    
    let range = (max - min) + 1;
    
    if (A.length == tempSetSize && range == tempSetSize) return 1
    else return 0;
    
}