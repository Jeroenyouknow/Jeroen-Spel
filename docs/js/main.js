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
        x = x;
        y = y;
        div.style.left = x + "px";
        div.style.top = y + "px";
    };
    return Car;
}());
var District = (function () {
    function District(a, b, div, p, l) {
        document.body.appendChild(div);
        var x = a * window.innerWidth;
        var y = b * window.innerHeight;
        this.move(x, y, div);
        this.population(p);
        this.landValue(l);
    }
    District.prototype.move = function (x, y, div) {
        x = x;
        y = y;
        div.style.left = x + "px";
        div.style.top = y + "px";
    };
    District.prototype.population = function (p) {
        var city = '';
        if (p < 10) {
            city = 'Het is een kleine stad';
        }
        if (p > 10) {
            city = 'Het is een grote stad';
        }
        console.log(city);
    };
    District.prototype.landValue = function (l) {
        console.log("Je landwaarde is nu $", l);
    };
    return District;
}());
var Game = (function () {
    function Game() {
        this.road = new Array();
        for (var i = 0; i < 11; i++) {
            this.Gameloop(i);
        }
    }
    Game.prototype.Gameloop = function (i) {
        i = i / 10;
        this.road.push(new Road(0.5, i, document.createElement("road")));
        this.road.push(new Road(i, 0.5, document.createElement("road_turn")));
        var car = new Car(0.55, 1, document.createElement("car"));
        var car_return = new Car(0.51, 0, document.createElement("car_return"));
        var car_right = new Car(1, 0.57, document.createElement("car_right"));
        var car_left = new Car(0, 0.51, document.createElement("car_left"));
        var recreation = new Recreation();
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Recreation = (function (_super) {
    __extends(Recreation, _super);
    function Recreation() {
        return _super.call(this, 0.58, 0.65, document.createElement("recreation"), 11, 500) || this;
    }
    return Recreation;
}(District));
var Road = (function () {
    function Road(a, b, div) {
        document.body.appendChild(div);
        var x = a * window.innerWidth;
        var y = b * window.innerHeight;
        this.move(x, y, div);
    }
    Road.prototype.move = function (x, y, div) {
        x = x;
        y = y;
        div.style.left = x + "px";
        div.style.top = y + "px";
    };
    return Road;
}());
//# sourceMappingURL=main.js.map