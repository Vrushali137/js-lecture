// rock paper scissor game 

function playGame(playerChoice) { // Function to handle game logic   (playerChoice is a variable)
    const choices = ['rock', 'paper', 'scissors']; // Array of choices
    const computerChoice = choices[Math.floor(Math.random() * 3)]; // Randomly selects a choice for the computer
    let result = ''; // Stores the result message

    if (playerChoice === computerChoice) { // Checks if it's a draw
        result = 'It\'s a draw!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') || // Player wins conditions
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win! 🎉';
    } else { // Player loses condition
        result = 'You lose! 😢';
    }

    document.getElementById('result').innerText = `Computer chose ${computerChoice}. ${result}`; // Updates result text
}

//     document.getElementById('result')

// This function fetches the id="result".
// The <p> tag in your HTML has id="result", which displays game results to the user.
// .innerText

// By modifying innerText, we dynamically update the displayed text without modifying the HTML structure itself.
// `Computer chose ${computerChoice}. ${result}`

// ${computerChoice} is replaced by the actual choice of the computer (rock, paper, or scissors).
// ${result} is replaced by the outcome of the game (e.g., "You win!", "You lose!", or "It's a draw!").

