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
        var _this = this;
        this.m = 0;
        this.l = 0;
        this.p = 0;
        this.district = div_district;
        this.forsale = div_buy;
        this.m = m;
        this.l = l;
        this.p = p;
        document.body.appendChild(div_buy);
        var x = a * window.innerWidth;
        var y = b * window.innerHeight;
        this.move(x, y, div_buy, div_district);
        this.forsale.addEventListener("click", function (e) { return _this.buy(e); });
    }
    District.prototype.move = function (x, y, div, div_district) {
        x = x;
        y = y;
        div.style.left = x + "px";
        div.style.top = y + "px";
        div_district.style.left = x + "px";
        div_district.style.top = y + "px";
    };
    District.prototype.population = function () {
        var population = document.getElementById("population");
        population.innerHTML = "Bewoners: " + this.p;
    };
    District.prototype.landValue = function () {
        var landvalue = document.getElementById("landvalue");
        landvalue.innerHTML = "Landwaarde: " + this.l;
    };
    District.prototype.money = function () {
        var money = document.getElementById("money");
        money.innerHTML = "Geld: $" + this.m;
        console.log(this.m);
    };
    District.prototype.buy = function (e) {
        console.log(this.m);
        if (this.m > this.l) {
            alert("Gefeliciteerd je hebt genoeg geld om dit district te kopen!");
            alert("District aan het bouwen...");
            this.forsale.remove();
            document.body.appendChild(this.district);
            this.m = this.m - this.l;
        }
        else {
            alert("Je hebt nog niet genoeg je moet nog doorsparen!");
            alert("Je hebt nu: $" + this.m + " en de waarde is: $" + this.l);
            console.log(this.m);
        }
    };
    ;
    return District;
}());
var Factory = (function (_super) {
    __extends(Factory, _super);
    function Factory() {
        var _this = _super.call(this, 0.58, 0.65, document.createElement("buy_4"), document.createElement("factory"), 10, 12, 3) || this;
        console.log(_this.m);
        setInterval(function () { return _this.landValue(); }, 1500);
        setInterval(function () { return _this.population(); }, 1500);
        setInterval(function () { return _this.money(); }, 1500);
        return _this;
    }
    return Factory;
}(District));
var Game = (function () {
    function Game() {
        this.audio = new Audio('audio/game_music.mp3');
        this.audio.play();
        this.audio.loop = true;
        this.road = new Array();
        this.Spawn();
    }
    Game.prototype.Spawn = function () {
        this.road.push(new Road(0, 0.5, document.createElement("road_turn")));
        this.road.push(new Road(0.5, 0, document.createElement("road")));
        var car = new Car(0.55, 1, document.createElement("car"));
        var car_return = new Car(0.51, 0, document.createElement("car_return"));
        var car_right = new Car(1, 0.57, document.createElement("car_right"));
        var car_left = new Car(0, 0.51, document.createElement("car_left"));
        var stop_sign = new Sign(0.45, 0.38, document.createElement("stop_sign"));
        var recreation_district = new Recreation();
        var shop_district = new Shop();
        var factory_district = new Factory();
        var living_district = new Living();
    };
    Game.prototype.Stats = function () {
        var money_balance = this.money;
    };
    return Game;
}());
var Living = (function (_super) {
    __extends(Living, _super);
    function Living() {
        var _this = _super.call(this, 0.58, 0.65, document.createElement("buy_2"), document.createElement("living"), 10, 12, 4) || this;
        console.log(_this.m);
        setInterval(function () { return _this.landValue(); }, 1500);
        setInterval(function () { return _this.population(); }, 1500);
        setInterval(function () { return _this.money(); }, 1500);
        return _this;
    }
    return Living;
}(District));
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
var start = document.createElement("button");
document.body.appendChild(start);
start.innerHTML = "Klik om het spel te starten!";
start.addEventListener("click", function () {
    if (isMobile.any()) {
        alert('Het spijt me maar Jeroen City is op dit nog niet beschikbaar op mobile devices. Probeer het via een Laptop of desktop nog een keer! ');
    }
    else {
        alert("Welkom bij Jeroen City, Veel speel plezier!");
        start.remove();
        new Game();
    }
});
var Recreation = (function (_super) {
    __extends(Recreation, _super);
    function Recreation() {
        var _this = _super.call(this, 0.58, 0.65, document.createElement("buy_1"), document.createElement("recreation"), 10, 12, 2) || this;
        console.log(_this.m);
        setInterval(function () { return _this.landValue(); }, 1500);
        setInterval(function () { return _this.population(); }, 1500);
        setInterval(function () { return _this.money(); }, 1500);
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
var Shop = (function (_super) {
    __extends(Shop, _super);
    function Shop() {
        var _this = _super.call(this, 0.58, 0.65, document.createElement("buy_3"), document.createElement("shop"), 10, 12, 1) || this;
        console.log(_this.m);
        setInterval(function () { return _this.landValue(); }, 1500);
        setInterval(function () { return _this.population(); }, 1500);
        setInterval(function () { return _this.money(); }, 1500);
        return _this;
    }
    return Shop;
}(District));
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