/**
 * Checks if the provided string is a palindrome.
 */
function isPalindrome(string) {
    let length = string.length;
    for (var i = 0; i < length; i++) {
        let endIndex = length - (i+1);
        if (string.charAt(i) != string.charAt(endIndex)) {
            return false;
        }
        if (endIndex >= i) {
            return true;
        }
    }
    return true;
}

function isPalindromeShort(string) {
    let reversed = string.split('').reverse().join('');
    return (string === reversed);
}