var counter = 0;
points = localStorage.getItem("counter");
console.log(counter);
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
        if (computerMove == "rock") { console.log("Its a tie"); }
        else if (computerMove == "paper") { console.log("You lose! Paper beats "); saveScore(); window.location.href = "./lose.html"; }
        else if (computerMove == "scissors") { console.log("You win! Rock beats scissors"); counter++; saveScore(counter); }
    }
    else if (move == "paper") {
        if (computerMove == "rock") { console.log("You win! Paper beats rock"); counter++; console.log(counter); }
        else if (computerMove == "scissors") { console.log("You lose! Scissors beats paper"); saveScore(); window.location.href = "./lose.html"; }
        else { console.log("It's a tie!"); }
    }
    else {
        if (computerMove == "rock") { console.log("You lose! Rock beats scissors"); saveScore(); window.location.href = "./lose.html"; }
        else if (computerMove == "paper") { console.log("You win! Scissors beats paper"); counter++; console.log(counter); }
        else { console.log("It's a tie!"); }
    }
    console.log(counter);
}
function CheckUserNameValid() {
    var name = document.getElementById("Username").value;
    if (name != "" && name != null) {
        window.location.href = "./scoreboard.html";
        point = GetScore();
        addPlayer(name, point);
        CreateScoreboard();
    }
}

var table = document.getElementById("table");
async function CreateScoreboard() {
    let response = await fetch("/getPlayers");
    let json = await response.json();
    console.log(json);
    for (let i = 0; i < json.length; i++) {
        let row = document.createElement('tr');
        let nameCell = document.createElement('td')
        nameCell.innerText = json[i].Name;
        row.appendChild(nameCell);
        let pointsCell = document.createElement("td");
        table.appendChild(pointsCell);
        pointsCell.innerText = json[i].Points;
        row.appendChild(pointsCell);
        table.appendChild(row);
    }

}

async function addPlayer(name, points) {
    let player = {
        Name: name,
        Points: points
    };
    console.log(player);

    let playerString = JSON.stringify(player);


    await fetch("/addPlayer", {
        method: "POST",
        body: playerString,
    });
}


function saveScore() {
    fetch("/addScore", {
        method: "POST",
        body: counter
    });
}

async function GetScore() {
    let response = await fetch("/getScore");
    var json = await response.json();
    console.log(json);
    return json;
}

if (window.location == './scoreboard.html') {
    CreateScoreboard();
}

localStorage.setItem("counter", counter);