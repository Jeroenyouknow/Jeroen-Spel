class Car {
    //Color
    color: number;
    //Position
    x: number;
    y: number;
    //Div
    div: HTMLElement;

    constructor() {
        this.color = Math.random() * 360;

        this.div = document.createElement("car");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () {
            let audio = new Audio('../docs/audio/Car_horn.mp3');
            audio.play();
            console.log("Vroem Vroem");
        });

        var x = 1 * window.innerWidth;
        var y = 0.70 * window.innerHeight;

        this.move(x, y);

        this.div.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
        this.div.style.filter = "hue-rotate(" + this.color + "deg)";
    }

    move(x: number, y: number) {
        this.x = x;
        this.y = y;

        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
}