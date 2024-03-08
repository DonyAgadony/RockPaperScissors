let point = 0;

function lose(points) {
    point = points;
    window.location.href = "./lose.html";
    console.log("The points are:" + points);
    console.log(point);
}
function CheckUserNameValid() {
    var name = document.getElementById("Username").value;
    if (name != "" && name != null) {
        window.location.href = "./scoreboard.html";
        addPlayer(name, point);
        CreateScoreboard();
    }
}