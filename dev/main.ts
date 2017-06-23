var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

let audio = new Audio('audio/main.mp3');
audio.play();
audio.loop = true;
let start = document.createElement("button");
document.body.appendChild(start);
start.innerHTML = "Klik om het spel te starten!";
start.addEventListener("click", function () {
    if (isMobile.any()) {
        alert('Het spijt me maar Jeroen City is op dit nog niet beschikbaar op mobile devices. Probeer het via een Laptop of desktop nog een keer! ');
    }

    else {
        start.remove();
        new Game();
        alert("Welkom bij Jeroen City, Veel speel plezier!");
        audio.pause();
    }

});