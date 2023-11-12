let raceNumber = Math.floor(Math.random() * 1000);
var runnersAge = 40;
var earlyAdults = (runnersAge >= 18 && raceNumber >= 1000);


if (earlyAdults) {
    raceNumber += 1000;
    console.log("You are running at 9:30AM.")
}  else if (runnersAge < 18) {
    console.log(`You are running at 12:30pm, bib number ${raceNumber}`);
} else {
    console.log(`You are running at 11AM, bib number ${raceNumber}`);
}
