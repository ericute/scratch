/**
 * Checks how many occurrences of a character occurs in a string
 */
function countOccurrence(string, char) {
    let length = string.length;
    let counter = 0;
    for (let i = 0; i < length; i++) {
        if (string.charAt(i) == char) {
            counter++;
        }
    }
    return counter;
}