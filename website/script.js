
function saveScore() {
    fetch("/addScore", {
        method: "POST",
        body: counter
    });
}
function AddEnemyPaperGlow() {
    document.getElementById("enemyPaper").style.boxShadow = " 0 0 200px  #9966CC";
    setTimeout(document.getElementById("enemyPaper").style.boxShadow = "null", 5000);
}
function AddEnemyRockGlow() {
    document.getElementById("enemyRock").style.boxShadow = " 0 0 200px  #9966CC";
    setTimeout(document.getElementById("enemyRock").style.boxShadow = "null", 5000);
}
function AddEnemyScissorsGlow() {
    document.getElementById("enemyScissors").style.boxShadow = "0 0 200px #9966CC";
    setTimeout(document.getElementById("enemyScissors").style.boxShadow = "null", 5000);
}
function AddPaperGlow() {
    document.getElementById("Paper").style.boxShadow = " 0 0 200px  #9966CC";
    setTimeout(document.getElementById("Paper").style.boxShadow = "null", 5000);
}
function AddRockGlow() {
    document.getElementById("Rock").style.boxShadow = "0 0 200px  #9966CC";
    setTimeout(document.getElementById("Rock").style.boxShadow = "null", 5000);
}
function AddScissorsGlow() {
    document.getElementById("Scissors").style.boxShadow = "0 0 200px #9966CC";
    setTimeout(document.getElementById("Scissors").style.boxShadow = "null", 5000);
}
function ResetGlow() {
    document.getElementById("Scissors").style.boxShadow = null;
    document.getElementById("Rock").style.boxShadow = null;
    document.getElementById("Paper").style.boxShadow = null;
    document.getElementById("enemyPaper").style.boxShadow = null;
    document.getElementById("enemyRock").style.boxShadow = null;
    document.getElementById("enemyScissors").style.boxShadow = null;
}