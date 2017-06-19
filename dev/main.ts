var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


let start = document.createElement("button");
document.body.appendChild(start);
start.innerHTML = "Klik om het spel te starten!";
start.addEventListener("click", function() {
    if( isMobile.any() ) alert('Mobile');
    alert("Welkom bij Jeroen City, Veel speel plezier!");
    start.remove(); 
    new Game(); 
});