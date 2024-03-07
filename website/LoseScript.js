function lose(counter) {
    window.location.href = "lose.html";
    console.log(counter);
}

function CheckUserNameValid() {
    var name = document.getElementById("Username");
    if (name.value != null) {
        AddToScoreBoard(name.value, counter);
        window.location.href = "scoreboard.html";
        handleScoreboardClick();
    }
}
async function AddToScoreBoard(name, counter) {
    console.log("Adding player to scoreboard");
    let player = {
        name: name,
        points: counter
    };
    await fetch("/addPlayer", {
        method: "POST",
        body: JSON.stringify(player),
    });
}
async function handleScoreboardClick() {
    let response = await fetch("/getPlayers");
    let json = await response.json();
    console.log(json[0]);


    var scoreboard = document.getElementById("scoreboardDIV");
    var table = document.createElement("table");
    table.innerHTML = null;
    for (var i = 0; i < json.length; i++) {
        var row = document.createElement("tr");
        var name = document.createElement("td");
        var points = document.createElement("td");
        name.innerText = json[i].name;
        points.innerText = json[i].points;
        row.appendChild(name);
    }
    table.appendChild(row);
    scoreboard.appendChild(table);
}
