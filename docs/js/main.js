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
        this.car = div;
        document.body.appendChild(this.car);
        div.addEventListener("click", function () {
            var audio = new Audio('audio/Car_horn.mp3');
            audio.play();
        });
        var x = a * window.innerWidth;
        var y = b * window.innerHeight;
        this.pos(x, y, this.car);
        div.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
        div.style.filter = "hue-rotate(" + this.color + "deg)";
    }
    Car.prototype.pos = function (x, y, div) {
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
    function District(a, b, c, d, div_buy, div_district, p, l, bonus) {
        var _this = this;
        this.m = 0;
        this.l = 0;
        this.p = 0;
        this.status = false;
        this.district = div_district;
        this.forsale = div_buy;
        this.bonus = bonus;
        this.m = 1000;
        this.l = l;
        this.p = l;
        document.body.appendChild(div_buy);
        var x = a * window.innerWidth;
        var y = b * window.innerHeight;
        var x_d = c * window.innerWidth;
        var y_d = d * window.innerHeight;
        this.move(x, y, x_d, y_d, div_buy, div_district);
        this.forsale.addEventListener("click", function (e) { return _this.buy(e); });
        this.interval_district_money = setInterval(function () { return _this.money(); }, 1000);
    }
    District.prototype.move = function (x, y, x_d, y_d, div, div_district) {
        x = x;
        y = y;
        div.style.left = x + "px";
        div.style.top = y + "px";
        x_d = x_d;
        y_d = y_d;
        div_district.style.left = x_d + "px";
        div_district.style.top = y_d + "px";
    };
    District.prototype.population = function () {
        var population = document.getElementById("population");
        population.innerHTML = "Bewoners: " + this.p;
    };
    District.prototype.landValue = function () {
        var landvalue = document.getElementById("landvalue");
        landvalue.innerHTML = "Landwaarde: $" + this.l;
    };
    District.prototype.money = function () {
        var money = document.getElementById("money");
        money.innerHTML = "Geld: $" + this.m;
    };
    District.prototype.buy = function (e) {
        var _this = this;
        alert("Deze district kost: $" + this.l);
        var money_need = this.l - this.m;
        if (this.m > this.l) {
            alert("Gefeliciteerd je hebt genoeg geld om dit district te kopen!");
            alert("District aan het bouwen...");
            alert(this.bonus);
            this.forsale.remove();
            this.status = true;
            document.body.appendChild(this.district);
            this.m = this.m - this.l;
            setInterval(function () { return _this.landValue(); }, 1000);
            setInterval(function () { return _this.population(); }, 1000);
        }
        else {
            alert("Je hebt nog niet genoeg je moet nog doorsparen!");
            alert("Je moet nog: $" + money_need + " sparen.");
        }
    };
    ;
    return District;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.audio = new Audio('audio/game_music.mp3');
        this.audio.play();
        this.audio.loop = true;
        this.r_Horizontal = new Road(0, 0.45, document.createElement("road_turn"));
        this.r_Vertical = new Road(0.5, 0, document.createElement("road"));
        this.c_Bottom = new Car(0.545, 1, document.createElement("car_bottom"));
        this.c_Top = new Car(0.505, 0, document.createElement("car_top"));
        this.c_Right = new Car(1, 0.53, document.createElement("car_right"));
        this.c_Left = new Car(0, 0.458, document.createElement("car_left"));
        this.recreation_district = new Recreation();
        this.interval = setInterval(function () { return _this.endGame(); }, 2000);
        this.Spawn();
    }
    Game.prototype.Spawn = function () {
        var road_Horizontal = this.r_Horizontal;
        var road_Vertical = this.r_Vertical;
        var car_Bottom = this.c_Bottom;
        var car_Top = this.c_Top;
        var car_Right = this.c_Right;
        var car_Left = this.c_Left;
        var recreation_District = this.recreation_district;
    };
    Game.prototype.endGame = function () {
        if (this.recreation_district.m > 5000) {
            this.audio.pause();
            this.r_Horizontal.road.remove();
            this.r_Vertical.road.remove();
            this.c_Bottom.car.remove();
            this.c_Top.car.remove();
            this.c_Right.car.remove();
            this.c_Left.car.remove();
            this.recreation_district.district.remove();
            clearInterval(this.interval);
            clearInterval(this.recreation_district.interval_district_money);
            this.r_Horizontal = undefined;
            this.r_Vertical = undefined;
            this.c_Bottom = undefined;
            this.c_Top = undefined;
            this.c_Right = undefined;
            this.c_Left = undefined;
            var audio_1 = new Audio('audio/main.mp3');
            audio_1.play();
            audio_1.loop = true;
            var score = document.createElement("score");
            document.body.appendChild(score);
            score.innerHTML = "Geweldig je hebt het spel gehaald je had de volgende score:<br> Geld: $" + this.recreation_district.m + "<br> Bewoners: " + this.recreation_district.p + "<br> Landwaarde: " + this.recreation_district.l + "Bedankt voor het spelen!";
            this.recreation_district = undefined;
        }
    };
    return Game;
}());
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
var audio = new Audio('audio/main.mp3');
audio.play();
audio.loop = true;
var start = document.createElement("button");
document.body.appendChild(start);
start.innerHTML = "Klik om het spel te starten!";
start.addEventListener("click", function () {
    if (isMobile.any()) {
        alert('Het spijt me maar Jeroen City is op dit nog niet beschikbaar op mobile devices. Probeer het via een Laptop of desktop nog een keer! ');
    }
    else {
        start.remove();
        var game = new Game();
        alert("Welkom bij Jeroen City eerst een kleine uitleg:");
        alert(" - Je moet eerst een district kopen");
        alert(" - Met een district verdien je geld");
        alert(" - Als je meer dan $5000 hebt verdiend heb je het spel gehaald");
        alert(" - Veel Speelplezier :)");
        audio.pause();
    }
});
var Recreation = (function (_super) {
    __extends(Recreation, _super);
    function Recreation() {
        var _this = _super.call(this, 0.75, 0.65, 0.582, 0.595, document.createElement("buy_1"), document.createElement("recreation"), 500, 800, 'Met het Recreation District krijg je om de 5 secoden $500 inkomsten') || this;
        setInterval(function () { return _this.addMoney(); }, 5000);
        _this.district.addEventListener("click", function () {
            var audio = new Audio('audio/recreation.mp3');
            audio.play();
        });
        return _this;
    }
    Recreation.prototype.addMoney = function () {
        if (this.status === true) {
            this.m = this.m + 500;
        }
    };
    return Recreation;
}(District));
var Road = (function () {
    function Road(a, b, div) {
        this.road = div;
        document.body.appendChild(this.road);
        var x = a * window.innerWidth;
        var y = b * window.innerHeight;
        this.move(x, y, this.road);
    }
    Road.prototype.move = function (x, y, div) {
        x = x;
        y = y;
        div.style.left = x + "px";
        div.style.top = y + "px";
    };
    return Road;
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
        div.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
        div.style.filter = "hue-rotate(" + this.color + "deg)";
    }
    Vehicle.prototype.move = function (x, y, div) {
        x = x;
        y = y;
        div.style.left = x + "px";
        div.style.top = y + "px";
    };
    return Vehicle;
}());
//# sourceMappingURL=main.js.map