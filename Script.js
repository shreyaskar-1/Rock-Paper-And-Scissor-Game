let userScore=0;
let compScore=0;


const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
 const options = ["rock" , "paper" , "scissors"];
 Math.random();
}

const playGame = () => {
 console.log("user Choice" , userChoice);
 //generate computer choice
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
