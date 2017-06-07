class Sign{

    constructor(a: number, b: number, div: HTMLElement) {

        document.body.appendChild(div);
        div.addEventListener("click", function () {
            let audio = new Audio('../docs/audio/Stop.mp3');
            audio.play();
        });

        var x = a * window.innerWidth;
        var y = b * window.innerHeight;

        this.placing(x, y, div);
    }

    placing(x: number, y: number, div: HTMLElement) {
        x = x;
        y = y;

        div.style.left = x + "px";
        div.style.top = y + "px";
    }
}