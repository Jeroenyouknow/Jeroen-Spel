class Road {
    x: number;
    y: number;
    div: HTMLElement;

    constructor(a: number) {

        this.div = document.createElement("road");
        document.body.appendChild(this.div);

        var x = 0.5 * window.innerWidth;
        var y = a * window.innerHeight;
        this.move(x, y);
    }

    move(x: number, y: number) {
        this.x = x;
        this.y = y;

        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
}