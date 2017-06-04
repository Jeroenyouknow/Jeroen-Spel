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
var Building = (function () {
    function Building(a, b, div) {
        document.body.appendChild(div);
        var x = a * window.innerWidth;
        var y = b * window.innerHeight;
        this.move(x, y, div);
    }
    Building.prototype.move = function (x, y, div) {
        x = x;
        y = y;
        div.style.left = x + "px";
        div.style.top = y + "px";
    };
    return Building;
}());
var Car = (function () {
    function Car(a, b, div) {
        this.color = Math.random() * 360;
        document.body.appendChild(div);
        div.addEventListener("click", function () {
            var audio = new Audio('../docs/audio/Car_horn.mp3');
            audio.play();
        });
        var x = a * window.innerWidth;
        var y = b * window.innerHeight;
        this.move(x, y, div);
        div.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
        div.style.filter = "hue-rotate(" + this.color + "deg)";
    }
    Car.prototype.move = function (x, y, div) {
        this.x = x;
        this.y = y;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
    };
    return Car;
}());
var Flat = (function (_super) {
    __extends(Flat, _super);
    function Flat() {
        return _super.call(this, 0.2, 0, document.createElement("flat")) || this;
    }
    return Flat;
}(Building));
var Game = (function () {
    function Game() {
        this.road = new Array();
        for (var i = 0; i < 11; i++) {
            this.Gameloop(i);
        }
    }
    Game.prototype.Gameloop = function (i) {
        i = i / 10;
        this.road.push(new Road(i));
        var car = new Car(0.55, 1, document.createElement("car"));
        var car_return = new Car(0.51, 0, document.createElement("car_return"));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Mansion = (function (_super) {
    __extends(Mansion, _super);
    function Mansion() {
        return _super.call(this, 0.8, 0, document.createElement("mansion")) || this;
    }
    return Mansion;
}(Building));
var Road = (function () {
    function Road(a) {
        this.div = document.createElement("road");
        document.body.appendChild(this.div);
        var x = 0.5 * window.innerWidth;
        var y = a * window.innerHeight;
        this.move(x, y);
    }
    Road.prototype.move = function (x, y) {
        this.x = x;
        this.y = y;
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    return Road;
}());
//# sourceMappingURL=main.js.map