
async function lose(count) {
    window.location.href = "./lose.html";
}
function CheckUserNameValid() {
    var name = document.getElementById("Username").value;
    if (name != "" && name != null) {
        window.location.href = "./scoreboard.html";
        addPlayer(name, point);
        CreateScoreboard();
    }
}