// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const result = document.getElementById('result');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = 'Please enter a valid number between 1 and 100.';
    } else if (guess < randomNumber) {
        result.textContent = 'Too low! Try again.';
    } else if (guess > randomNumber) {
        result.textContent = 'Too high! Try again.';
    } else {
        result.textContent = 'Congratulations! You guessed the right number!';
    }
}
