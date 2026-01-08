

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const getHumanChoice = () => {
    const answer = prompt("rock, paper or scissors?");
    return answer;
}


const checkHumanWin = (humanChoice, computerChoice) => {
    return (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "scissors" && computerChoice === "paper");
}

const playGame = () => {

    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("It is a draw");
            return;
        }
        if (checkHumanWin()) {
            console.log(`Human wins with ${humanChoice} against ${computerChoice}`);
        } else {
            console.log(`Computer wins with ${computerChoice} against ${humanChoice}`);
        }
    }
}
