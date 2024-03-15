var table = document.getElementById("table");
async function CreateScoreboard() {
    let response = await fetch("/getPlayers");
    let json = await response.json();
    console.log(json);
    for (let i = 0; i < json.length; i++) {
        let row = document.createElement('tr');
        let celli = document.createElement('td')
        celli.innerText = i+1;
        row.appendChild(celli);
        let nameCell = document.createElement('td')
        nameCell.innerText = json[i].Name;
        console.log(nameCell.innerText);
        row.appendChild(nameCell);
        let pointsCell = document.createElement("td");
        table.appendChild(pointsCell);
        row.appendChild(pointsCell);
        pointsCell.innerText = json[i].Points;
        console.log(pointsCell.innerText);
        table.appendChild(row);
    }
}
CreateScoreboard();
