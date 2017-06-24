class Road {
private road: HTMLElement;

    constructor(a: number, b: number, div: HTMLElement) {

         this.road = div;

        document.body.appendChild(this.road);

        var x = a * window.innerWidth;
        var y = b * window.innerHeight;
        this.move(x, y, this.road);
    }

     private move(x: number, y: number, div: HTMLElement) {
        x = x;
        y = y;

        div.style.left = x + "px";
        div.style.top = y + "px";
    }
}