function playGuessingGame(numToGuess, totalGuesses=10) {
    let response = prompt("Enter a number between 1 and 100.")
    for (let i = 0; i < totalGuesses; i++) {
        if (response === null) {
            return 0
        }
        response = parseInt(response)
        console.log(response)
        if (isNaN(response)) {
            response = prompt("Please enter a number.")
            i--
        }
        else if (response < numToGuess) {
            response = prompt(`${response} is too small. Guess a larger number.`)
        }
        else if (response > numToGuess) {
            response = prompt(`${response} is too large. Guess a smaller number.`)
        }
        else if (response == numToGuess) {
            return i + 1
        }
    }
    return 0
}