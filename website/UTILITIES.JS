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
        if (computerMove == "rock") { Tie(); setTimeout(() => { console.log("delayed code"); }, 2000); AddEnemyRockGlow(); console.log("Its a tie"); }
        else if (computerMove == "paper") { Lose(); AddEnemyPaperGlow(); console.log("You lose! Paper beats "); setTimeout(() => { console.log("delayed code"); }, 2000); saveScore(); CheckUserNameValid(); }
        else if (computerMove == "scissors") { Win(); setTimeout(() => { console.log("delayed code"); }, 2000); AddEnemyScissorsGlow(); console.log("You win! Rock beats scissors"); counter++; saveScore(counter); }
    }
    else if (move == "paper") {
        AddPaperGlow();
        if (computerMove == "rock") { Win(); setTimeout(() => { console.log("delayed code"); }, 2000); AddEnemyRockGlow(); console.log("You win! Paper beats rock"); counter++; console.log(counter); }
        else if (computerMove == "scissors") { Lose(); AddEnemyPaperGlow(); console.log("You lose! Scissors beats paper"); setTimeout(() => { console.log("delayed code"); }, 2000); saveScore(); CheckUserNameValid(); }
        else { Tie(); setTimeout(() => { console.log("delayed code"); }, 2000); AddEnemyPaperGlow(); console.log("It's a tie!"); }
    }
    else {
        AddScissorsGlow();
        if (computerMove == "rock") { Lose(); AddEnemyRockGlow(); console.log("You lose! Rock beats scissors"); setTimeout(() => { console.log("delayed code"); }, 2000); saveScore(); CheckUserNameValid(); }
        else if (computerMove == "paper") { Win(); setTimeout(() => { console.log("delayed code"); }, 2000); AddEnemyPaperGlow(); console.log("You win! Scissors beats paper"); counter++; console.log(counter); }
        else { Tie(); setTimeout(() => { console.log("delayed code"); }, 2000); AddEnemyScissorsGlow(); console.log("It's a tie!"); }
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


