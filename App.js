let gameResult = document.getElementById("gameResult");
        let userInput = document.getElementById("userInput");
        let randomNumber = Math.ceil(Math.random() * 100)
        console.log(randomNumber);

        function checkGuess() {
            let guessedNumber = parseInt(userInput.value)
            if (guessedNumber > randomNumber) {
                gameResult.textContent = "To High, Try again"
                gameResult.style.backgroundColor = "#1e217c"
            } else if (guessedNumber < randomNumber) {
                gameResult.textContent = "To Low, Try again"
                gameResult.style.backgroundColor = "#1e217c"
            } else if (guessedNumber === randomNumber) {
                gameResult.textContent = "Congratulations! Your are right"
                gameResult.style.backgroundColor = "green"
            } else {
                gameResult.textContent = "Please provide valid Input"
                gameResult.style.backgroundColor = "red"
            }
        }