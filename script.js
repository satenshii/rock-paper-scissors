

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
            return "It is a draw";
        } else if (checkHumanWin(humanChoice, computerChoice)) {
            humanScore++;
            return `Human wins with ${humanChoice} against ${computerChoice}`;
        } else {
            computerScore++;
            return `Computer wins with ${computerChoice} against ${humanChoice}`;
        }
    }

    for (let i = 0; i < 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log(`The scores are: \nHuman has ${humanScore} points \nComputer has ${computerScore} points`);
    }
}

playGame();