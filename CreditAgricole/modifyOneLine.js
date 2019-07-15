/*

Find  the bug(s) and modify one line of code in the incorrect implementation of a function solution
that is suppposed to return the smallest element of the given non-empty array A which containts at
most 1000 integers within range [-1000...1000].

Notice that for the example test case A = [-1, 1, -2, 2] the attached code is already returning the
correct answer (-2).

*/

function solution(A) {
    var ans = 0;
    for (i = 1; i <= A.length; i++) {
        if (ans > A[i]) {
            ans = A[i];
        }
    }
    return ans;
}