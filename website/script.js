
var counter = 0;
function ComputerMove() {
    var PCMove = Math.floor(Math.random() * 3) + 1;
    if (PCMove == 1) { PCMove = "rock"; }
    else if (PCMove == 2) { PCMove = "paper"; }
    else { PCMove = "scissors"; }
    return PCMove;
}
function GameOn(move) {
    var computerMove = ComputerMove();
    if (move == "rock") {
        if (computerMove == "rock") { console.log("You win! Paper beats rock"); counter++; console.log(counter); }
        if (computerMove == "paper") { console.log("You lose! Paper beats "); lose(counter); }
        else if (computerMove == "scissors") { console.log("You win! Rock beats scissors"); counter++; }
        else { console.log("It's a tie!"); }
    }
    else if (move == "paper") {
        if (computerMove == "rock") { console.log("You win! Paper beats rock"); counter++; console.log(counter); }
        else if (computerMove == "scissors") { console.log("You lose! Scissors beats paper"); lose(counter); }
        else { console.log("It's a tie!"); }
    }
    else {
        if (computerMove == "rock") { console.log("You lose! Rock beats scissors"); lose(counter); }
        else if (computerMove == "paper") { console.log("You win! Scissors beats paper"); counter++; console.log(counter); }
        else { console.log("It's a tie!"); }
    }
    console.log(counter);
}