class Building {

    

    constructor(a: number,b: number,div: HTMLElement) {
       
        document.body.appendChild(div);
        // this.div.addEventListener("click", function () {
        //     let audio = new Audio('../docs/audio/Car_horn.mp3');
        //     audio.play();
        //     console.log("Vroem Vroem");
        // });

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