let start = document.createElement("button");
document.body.appendChild(start);
start.innerHTML = "Klik om het spel te starten!";
start.addEventListener("click", function() {
    alert("Welkom bij Jeroen City, Veel speel plezier!");
    start.remove(); 
    new Game(); 
});