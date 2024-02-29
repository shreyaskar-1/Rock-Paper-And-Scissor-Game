let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was a draw.");
    msg.innerText = "Game Was Draw . Play Again!";
    msg.style.backgroundColor = "#081b31"
}

const updateScore = (userWin) => {
    if (userWin) {
        userScore++;
        console.log("User wins!");
    } else {
        compScore++;
        console.log("Computer wins!");
    }
    console.log("User Score: ", userScore);
    console.log("Computer Score: ", compScore);
}

const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin){
        console.log("you win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    } else {
        console.log("you lose");
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
};

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer Choice =", compChoice);

    if (userChoice === compChoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin ,userChoice , compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
