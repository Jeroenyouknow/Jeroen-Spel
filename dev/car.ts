class Car {
    //Color
    color: number;
    //Position
    x: number;
    y: number;
    //Div
   

    constructor(a: number, b: number, div: HTMLElement) {
        this.color = Math.random() * 360;

        document.body.appendChild(div);
        div.addEventListener("click", function () {
            let audio = new Audio('../docs/audio/Car_horn.mp3');
            audio.play();
        });

        var x = a * window.innerWidth;
        var y = b * window.innerHeight;

        this.move(x, y, div);

        div.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
        div.style.filter = "hue-rotate(" + this.color + "deg)";
    }

    move(x: number, y: number, div: HTMLElement) {
        this.x = x;
        this.y = y;

        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
    }
}