// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let convertedString = N.toString(2);
    let currentStreak = 0;
    let longestStreak = 0;
    
    let lastIndex = convertedString.lastIndexOf('1');
    let newString = convertedString.substring(0, lastIndex+1);
    
    let split = newString.split('1');
    
    for (let i = 0; i < split.length; i++) {
        if (split[i].length > 0) currentStreak = split[i].length
        if (currentStreak > longestStreak) longestStreak = currentStreak;
    }
    
    if (currentStreak > longestStreak) 
        longestStreak = currentStreak;
    
    return longestStreak;
    
}