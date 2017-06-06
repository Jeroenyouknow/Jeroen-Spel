class Vehicle {
    color: number;

    constructor(a: number, b: number, div: HTMLElement, g: number) {
        this.color = Math.random() * 360;

        document.body.appendChild(div);
        div.addEventListener("click", function () {
            let audio = new Audio('../docs/audio/Car_horn.mp3');
            audio.play();
        });

        var x = a * window.innerWidth;
        var y = b * window.innerHeight;

        this.move(x, y, div);
        this.fuel(g);

        div.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
        div.style.filter = "hue-rotate(" + this.color + "deg)";
    }

    move(x: number, y: number, div: HTMLElement) {
        x = x;
        y = y;

        div.style.left = x + "px";
        div.style.top = y + "px";
    }

    fuel(g: number) {
     console.log('Je heb top dit moment nog:',g,'liter bezine');
    }
}