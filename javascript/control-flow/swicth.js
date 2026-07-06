function getValue(marks){
    switch (marks) {
        case (marks >= 90):
            return "A+";
            break;
        case (marks >= 80):
            return "A";
            break;
        case (marks >= 70):
            return "B";
            break;          
        case (marks >= 60):
            return "C+";
            break;
        case (marks >= 50):
            return "C";
            break;
        default:
            return "Failed";
    }
}

console.log(getValue(34));

function rockPaperScissors(player1, player2){
    switch (true) {
        case (player1 === player2):
            return "It's a tie!";
        case (player1 === "rock" && player2 === "scissors"):
            return "Player 1 wins!";
        case (player1 === "paper" && player2 === "rock"):
            return "Player 1 wins!";
        case (player1 === "scissors" && player2 === "paper"):
            return "Player 1 wins!";
        default:
            return "Player 2 wins!";
    }
}
console.log(rockPaperScissors("rock", "scissors"));
