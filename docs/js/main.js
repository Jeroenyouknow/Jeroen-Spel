var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = (function () {
    function Book() {
        this.div = document.createElement("book");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () {
            alert("Ah mijn vertrouwde boek voor presidenten. Met daarin de lanceer codes : 2345. Natuurlijk het landnummer van Rusland. Maar het belangrijkste nog wel mijn Twitter naam.  Hey pratend over Twitter laat me eens een geweldige twee verzenden! #MakeAmericaGreatAgain");
        });
        var x = 0 * window.innerWidth;
        var y = 0 * window.innerHeight;
        this.move(x, y);
    }
    Book.prototype.move = function (x, y) {
        this.x = x;
        this.y = y;
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    return Book;
}());
var Car_return = (function () {
    function Car_return() {
        this.color = Math.random() * 360;
        this.div = document.createElement("car_return");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () { var audio = new Audio('../docs/audio/Car_horn.mp3'); audio.play(); console.log("Vroem Vroem"); });
        var x = -0.1 * window.innerWidth;
        var y = 0.5 * window.innerHeight;
        this.move(x, y);
        this.div.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
        this.div.style.filter = "hue-rotate(" + this.color + "deg)";
    }
    Car_return.prototype.move = function (x, y) {
        this.x = x;
        this.y = y;
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    Car_return.prototype.speak = function () {
    };
    return Car_return;
}());
var Car = (function () {
    function Car() {
        this.color = Math.random() * 360;
        this.div = document.createElement("car");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () {
            var audio = new Audio('../docs/audio/Car_horn.mp3');
            audio.play();
            console.log("Vroem Vroem");
        });
        var x = 1 * window.innerWidth;
        var y = 0.70 * window.innerHeight;
        this.move(x, y);
        this.div.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
        this.div.style.filter = "hue-rotate(" + this.color + "deg)";
    }
    Car.prototype.move = function (x, y) {
        this.x = x;
        this.y = y;
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    return Car;
}());
var Character = (function () {
    function Character() {
    }
    return Character;
}());
var Game = (function () {
    function Game() {
        var car = new Car();
        var car_return = new Car_return();
        var trump = new Trump();
        var book = new Book();
        var twitter = new Twitter();
    }
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Score = (function () {
    function Score() {
    }
    return Score;
}());
var Trump = (function (_super) {
    __extends(Trump, _super);
    function Trump() {
        var _this = _super.call(this) || this;
        _this.div = document.createElement("trump");
        document.body.appendChild(_this.div);
        _this.div.addEventListener("click", function () {
            alert("Hallo ik ben Trump ga je mij helpen om Amerika opnieuw op te bouwen?  Zoals je kan zien rijden er nu auto's maar niet amerikaans! Doe er wat aan!");
        });
        var x = 0.25 * window.innerWidth;
        var y = 0.35 * window.innerHeight;
        _this.move(x, y);
        return _this;
    }
    Trump.prototype.move = function (x, y) {
        this.x = x;
        this.y = y;
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    return Trump;
}(Character));
var Twitter = (function () {
    function Twitter() {
        this.div = document.createElement("twitter");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () {
            alert("CoVeFe #SoGood #TrumpForPresident #AllGood #Russia");
            alert("Ah we hebben onze plicht gedaan, iedereen weet gelijk wat wij doen. Yeaaah hier krijg je wat trump punten.");
        });
        var x = 0.15 * window.innerWidth;
        var y = 0 * window.innerHeight;
        this.move(x, y);
    }
    Twitter.prototype.move = function (x, y) {
        this.x = x;
        this.y = y;
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    return Twitter;
}());
//# sourceMappingURL=main.js.map