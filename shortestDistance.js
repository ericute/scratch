/**
 * 
 * A non-empty zero-indexed array A consisting of N non-negative integers is given.
 * For elements A[P] and A[Q] that are distinct, i.e. P != Q, their distance is defined as:
 * 
 *  (A[P] - A[Q]) if (A[P] - A[Q]) >= 0;
 *  (A[Q] - A[P]) if (A[P] - A[Q]) < 0
 * 
 * Write a function:
 *      fuction solution(A);
 * 
 * that, given n zero-indexed array A consisting of N non-negative integers, returns the
 * minimum distance between 2 distint elements of A.
 * 
 * For example, given array A such that:
 *  A[0] = 8
 *  A[1] = 24
 *  A[2] = 3
 *  A[4] = 20
 *  A[5] = 1
 *  A[6] = 17
 * the function should return 2, because (A[2] - A[4] = 2) and no other two distinct
 * elements of A have smaller distance.
 * 
 * Given array A such that:
 * 
 *  A[0] = 7
 *  A[1] = 21
 *  A[2] = 3
 *  A[3] = 42
 *  A[4] = 3
 *  A[5] = 7
 * the function should return 0.
 * 
 * Assume that:
 *  -   N is an integer within the range [2..100,000]
 *  -   each element of array A is an integer within the range [0..1,000,000]
 * 
 * @param {array} A 
 */

function solution(A) {

    A = A.sort();

    let prevVal;
    let distances = [];

    for (let i = 0; i < A.length; i++) {
        let curVal = A[i];
        let tempDistance = Math.abs(prevVal - curVal);
        if (!isNaN(tempDistance)) {
            distances.push(tempDistance);
        }
        if (tempDistance == 0) {
            return tempDistance;
        }

        prevVal = curVal;
    }

    return parseInt(Math.min(...distances));

}