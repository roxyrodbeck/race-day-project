let raceNumber = Math.floor(Math.random() * 1000);
var runnersAge = 40;
var earlyRegistration = false;

if (runnersAge > 18 && earlyRegistration === true) {
    raceNumber += 1000;
}

console.log(`Runner age is ${runnersAge}`);
console.log(`Runner registered early: ${earlyRegistration}`);

if (runnersAge > 18 && earlyRegistration === true) {
    console.log(`You are running at 9:30AM. Bib number: ${raceNumber}`);
} else if (runnersAge > 18 && earlyRegistration === false) {
     console.log(`You are running at 11AM, bib number ${raceNumber}`);
} else if (runnersAge < 18) {
    console.log(`You are running at 12:30pm, bib number ${raceNumber}`);
} else if (runnersAge === 18) {
    console.log(`Happy birthday!`)
}
