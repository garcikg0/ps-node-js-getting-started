// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
let counter = 0;
const timerChallenge = setInterval(() => {
    console.log('Hello World');
    counter ++;

    if (counter === 5) {
        console.log('Done');
        clearInterval(timerChallenge);
    }
}, 1000)

