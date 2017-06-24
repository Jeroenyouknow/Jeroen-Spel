class Car {
    private color: number;
    public car: HTMLElement;

    constructor(a: number, b: number, div: HTMLElement) {
        this.color = Math.random() * 360;
        this.car = div;

        document.body.appendChild(this.car);
        div.addEventListener("click", function () {
            let audio = new Audio('audio/Car_horn.mp3');
            audio.play();
        });

        var x = a * window.innerWidth;
        var y = b * window.innerHeight;

        this.pos(x, y, this.car);

        div.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
        div.style.filter = "hue-rotate(" + this.color + "deg)";
    }

    pos(x: number, y: number, div: HTMLElement) {
        x = x;
        y = y;

        div.style.left = x + "px";
        div.style.top = y + "px";
    }
}