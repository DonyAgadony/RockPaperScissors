var counter = 0;
function ComputerMove() {
    var PCMove = Math.floor(Math.random() * 3) + 1;
    if (PCMove == 1) { PCMove = "rock"; }
    else if (PCMove == 2) { PCMove = "paper"; }
    else { PCMove = "scissors"; }
    return PCMove;
}
async function GameOn(move) {
    ResetGlow();
    var computerMove = ComputerMove();
    if (move == "rock") {
        AddRockGlow();
        if (computerMove == "rock") { AddEnemyRockGlow(); console.log("Its a tie"); }
        else if (computerMove == "paper") {AddEnemyPaperGlow(); console.log("You lose! Paper beats "); saveScore(); CheckUserNameValid(); }
        else if (computerMove == "scissors") { AddEnemyScissorsGlow(); console.log("You win! Rock beats scissors"); counter++; saveScore(counter); }
    }
    else if (move == "paper") {
        AddPaperGlow();
        if (computerMove == "rock") { AddEnemyRockGlow(); console.log("You win! Paper beats rock"); counter++; console.log(counter); }
        else if (computerMove == "scissors") { AddEnemyPaperGlow(); console.log("You lose! Scissors beats paper"); saveScore(); CheckUserNameValid(); }
        else {AddEnemyPaperGlow(); console.log("It's a tie!"); }
    }
    else {
        AddScissorsGlow();
        if (computerMove == "rock") { AddEnemyRockGlow(); console.log("You lose! Rock beats scissors"); saveScore(); CheckUserNameValid(); }
        else if (computerMove == "paper") { AddEnemyPaperGlow(); console.log("You win! Scissors beats paper"); counter++; console.log(counter);}
        else { AddEnemyScissorsGlow(); console.log("It's a tie!"); }
    }
    console.log(counter);
}
async function CheckUserNameValid() {
    let name = document.getElementById("username");
    name = name.value;
    console.log(name);
    if (name == "" || name == null) {
        name = "unknown";
    }
    console.log("adding Player");
    addPlayer(name);
    window.location.href = "./scoreboard.html";
    CreateScoreboard();
}

async function addPlayer(name) {
    var points = await GetScore();
    let player = {
        Name: name,
        Points: points
    };
    console.log(player);

    let playerString = JSON.stringify(player);

    console.log("adds player");
    await fetch("/addPlayer", {
        method: "POST",
        body: playerString,
    });
}
async function GetScore() {
    let response = await fetch("/getScore");
    var json = await response.json();
    console.log(json);
    return json;
}


