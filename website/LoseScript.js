let point = 0;

function lose(points) {
    window.location.href = "./lose.html";
    point = points;
}
function CheckUserNameValid() {
    var name = document.getElementById("Username").value;
    if (name != "" && name != null) {
        addPlayer(name, point);
        handlePlayersClick();
        window.location.href = "./scoreboard.html";
    }
}
var table =  document.getElementById("table");
 async function handlePlayersClick() {
      let response = await fetch("/getPlayers");
      let json = await response.json();
     console.log(json);
     
     table.innerHTML = null;
     for (let i = 0; i < json.length; i++) {
         let row = document.createElement('tr');
         let nameCell = document.createElement('td')
         nameCell.appendChild(document.createTextNode(json[i].name));
         row.appendChild(nameCell);
        let pointsCell = document.createElement("td");
        table.appendChild(pointsCell);
         pointsCell.innerText = json.points;
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

    let playetString = JSON.stringify(player);


    await fetch("/addPlayer", {
        method: "POST",
        body: playetString,
    });
}

handlePlayersClick();