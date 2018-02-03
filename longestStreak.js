var binaryConverted = (101).toString(2);
console.log(binaryConverted);
var streak = 0;
var longestStreak = 0;
for (var i = 0; i < binaryConverted.length; i++) {
	console.log(binaryConverted[i]);
    if (binaryConverted[i] == 0) {
		streak++;
    } else {
		streak = 0;
    }
	if (streak > longestStreak) {
        console.log('increase streak');
        longestStreak = streak;
    }
    //console.log('longestStreak: '+longestStreak);
}
console.log('longestStreak: '+longestStreak);