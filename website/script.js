
function saveScore() {
    fetch("/addScore", {
        method: "POST",
        body: counter
    });
}