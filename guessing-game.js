function guessingGame() {
    let numGuesses = 0;
    let solved = false;
    const secretNum = Math.floor(Math.random() * 100);
    return function (guess) {
        numGuesses ++;
        if (solved) {
            return "The game is over, you already won!";
        } else if (guess === secretNum) {
            solved = true;
            return `You win! You found ${secretNum} in ${numGuesses} guesses.`
        } else if (guess < secretNum) {
            return `${guess} is too low!`;
        } else {
            return `${guess} is too high!`;
        }
    }
}

module.exports = { guessingGame };
