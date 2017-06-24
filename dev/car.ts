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
        this.color_car(this.car)

        
    }

    private color_car(div: HTMLElement){
        div.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
        div.style.filter = "hue-rotate(" + this.color + "deg)";
    }

     private pos(x: number, y: number, div: HTMLElement) {
        x = x;
        y = y;

        div.style.left = x + "px";
        div.style.top = y + "px";
    }
}