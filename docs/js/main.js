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
var Coin = (function () {
    function Coin(a, b, div, g, v) {
        document.body.appendChild(div);
        div.addEventListener("click", function () {
        });
        var x = a * window.innerWidth;
        var y = b * window.innerHeight;
        this.move(x, y, div);
        this.addCoin(g, div, v);
    }
    Coin.prototype.move = function (x, y, div) {
        x = x;
        y = y;
        div.style.left = x + "px";
        div.style.top = y + "px";
    };
    Coin.prototype.addCoin = function (g, div, v) {
        var coin = document.getElementById("coin_amount");
        coin.innerHTML = "Je hebt $1000 coins op dit moment";
        div.addEventListener("click", function () {
            g = g + v;
            coin.innerHTML = "Je hebt $" + g + " coins op dit moment";
        });
    };
    return Coin;
}());
var District = (function () {
    function District(a, b, div_buy, div_district, p, l, m) {
        document.body.appendChild(div_buy);
        var x = a * window.innerWidth;
        var y = b * window.innerHeight;
        this.move(x, y, div_buy);
        div_buy.addEventListener("click", function () {
        });
    }
    District.prototype.move = function (x, y, div) {
        x = x;
        y = y;
        div.style.left = x + "px";
        div.style.top = y + "px";
    };
    District.prototype.population = function (p) {
        var population = document.getElementById("population");
        population.innerHTML = "Bewoners: " + p;
    };
    District.prototype.landValue = function () {
        var landvalue = document.getElementById("landvalue");
        landvalue.innerHTML = "Landwaarde: " + this.l;
    };
    District.prototype.money = function () {
        var money = document.getElementById("money");
        money.innerHTML = "Geld: $" + this.m;
    };
    District.prototype.buy = function (div_buy, div_district) {
        if (this.m === this.l) {
            alert("Gefeliciteerd je hebt genoeg geld om dit district te kopen!");
            alert("District aan het bouwen...");
            div_buy.remove();
            document.body.appendChild(div_district);
            this.m = this.m - this.l;
        }
    };
    ;
    return District;
}());
var Game = (function () {
    function Game() {
        this.audio = new Audio('audio/game_music.mp3');
        this.audio.play();
        this.road = new Array();
        for (var i = 0; i < 11; i++) {
            this.Gameloop(i);
        }
        this.Spawn();
    }
    Game.prototype.Gameloop = function (i) {
        i = i / 10;
        this.road.push(new Road(i, 0.5, document.createElement("road_turn")));
        this.road.push(new Road(0.5, i, document.createElement("road")));
    };
    Game.prototype.Spawn = function () {
        var car = new Car(0.55, 1, document.createElement("car"));
        var car_return = new Car(0.51, 0, document.createElement("car_return"));
        var car_right = new Car(1, 0.57, document.createElement("car_right"));
        var car_left = new Car(0, 0.51, document.createElement("car_left"));
        var stop_sign = new Sign(0.45, 0.38, document.createElement("stop_sign"));
        var recreation_district = new Recreation();
    };
    Game.prototype.Stats = function () {
        var money_balance = this.money;
    };
    return Game;
}());
var start = document.createElement("button");
document.body.appendChild(start);
start.innerHTML = "Klik om het spel te starten!";
start.addEventListener("click", function () {
    alert("Welkom bij Jeroen City, Veel speel plezier!");
    start.remove();
    new Game();
});
var Recreation = (function (_super) {
    __extends(Recreation, _super);
    function Recreation() {
        var _this = _super.call(this, 0.58, 0.65, document.createElement("buy_1"), document.createElement("recreation"), 0, 0, 0) || this;
        _this.l = 750;
        _this.landValue();
        _this.population(5);
        _this.m = 1000;
        _this.money();
        return _this;
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
var Sign = (function () {
    function Sign(a, b, div) {
        document.body.appendChild(div);
        div.addEventListener("click", function () {
        });
        var x = a * window.innerWidth;
        var y = b * window.innerHeight;
        this.placing(x, y, div);
    }
    Sign.prototype.placing = function (x, y, div) {
        x = x;
        y = y;
        div.style.left = x + "px";
        div.style.top = y + "px";
    };
    return Sign;
}());
var Vehicle = (function () {
    function Vehicle(a, b, div, g) {
        this.color = Math.random() * 360;
        document.body.appendChild(div);
        div.addEventListener("click", function () {
        });
        var x = a * window.innerWidth;
        var y = b * window.innerHeight;
        this.move(x, y, div);
        this.fuel(g);
        div.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
        div.style.filter = "hue-rotate(" + this.color + "deg)";
    }
    Vehicle.prototype.move = function (x, y, div) {
        x = x;
        y = y;
        div.style.left = x + "px";
        div.style.top = y + "px";
    };
    Vehicle.prototype.fuel = function (g) {
        console.log('Je heb top dit moment nog:', g, 'liter bezine');
    };
    return Vehicle;
}());
//# sourceMappingURL=main.js.map