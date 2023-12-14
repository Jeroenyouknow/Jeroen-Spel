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
    // if (isMobile.any()) {
    //     alert('Het spijt me maar Jeroen City is op dit nog niet beschikbaar op mobile devices. Probeer het via een Laptop of desktop nog een keer! ');
    // }

    // else {
    //     start.remove();
    //      let game = new Game();
    //     alert("Welkom bij RAC-Software eerst een kleine uitleg:");
    //     alert("Je moet eerst een district kopen");
    //     alert("Met een district verdien je geld");
    //     alert("Als je meer dan $5000 hebt verdiend heb je het spel gehaald");
    //     alert(" Veel Speelplezier :)");
    //
    //     audio.pause();
    // }
    start.remove();
    let game = new Game();
});





