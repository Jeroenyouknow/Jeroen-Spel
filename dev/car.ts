class Car {
    color: number;

    constructor(a: number, b: number, div: HTMLElement) {
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

    move(x: number, y: number, div: HTMLElement) {
        x = x;
        y = y;

        div.style.left = x + "px";
        div.style.top = y + "px";
    }
}