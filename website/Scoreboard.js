
var table = document.getElementById("table");
async function CreateScoreboard() {
    let response = await fetch("/getPlayers");
    let json = await response.json();
    console.log(json);
    for (let i = 0; i < json.length; i++) {
        let row = document.createElement('tr');
        let nameCell = document.createElement('td')
        console.log
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
if (window.location == './scoreboard.html') {
    CreateScoreboard();
}
