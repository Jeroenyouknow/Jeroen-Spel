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
var Game = (function () {
    function Game() {
        var car = new Car();
        var car_return = new Car_return();
    }
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map