class Road {

    constructor(a: number, b: number, div: HTMLElement) {

        document.body.appendChild(div);

        var x = a * window.innerWidth;
        var y = b * window.innerHeight;
        this.move(x, y, div);
    }

    move(x: number, y: number, div: HTMLElement) {
        x = x;
        y = y;

        div.style.left = x + "px";
        div.style.top = y + "px";
    }
}