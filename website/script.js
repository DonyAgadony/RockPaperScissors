
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
function Win() {
    console.log("Enterd Win");
    let div = document.getElementById("CommentOnScore");
    div.innerHTML = null;
    let p = document.createElement("p");
    let Comment = document.createElement("div");
    Comment.style.display = "block";
    Comment.style.color = "green";
    Comment.classList.add("death-background");
    p.innerText = "You Won!";
    Comment.appendChild(p);
    div.appendChild(Comment);
    setTimeout(() => { ClearComment(); }, 3000);
}
function Tie() {
    console.log("Enterd Tie");
    let div = document.getElementById("CommentOnScore");
    div.innerHTML = null;
    let p = document.createElement("p");
    let Comment = document.createElement("div");
    Comment.style.display = "block";
    Comment.style.color = "yellow";
    Comment.classList.add("death-background");
    p.innerText = "Its A Tie!";
    Comment.appendChild(p);
    div.appendChild(Comment);
    setTimeout(() => { ClearComment(); }, 3000);
}
function Lose() {
    console.log("Enterd Lose");
    let div = document.getElementById("CommentOnScore");
    let p = document.createElement("p");
    div.innerHTML = null;
    let Comment = document.createElement("div");
    Comment.style.display = "block";
    Comment.style.color = "red";
    Comment.classList.add("death-background");
    p.innerText = "You Lost!";
    Comment.appendChild(p);
    div.appendChild(Comment);
    setTimeout(() => { ClearComment(); }, 3000);
}
function ClearComment() {
    console.log("Clearing");
    let div = document.getElementById("CommentOnScore");
    div.innerHTML = null;
}