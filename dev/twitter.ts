class Twitter {
    //Color
    color: number;
    //Position
    x: number;
    y: number;
    //Div
    div: HTMLElement;

    constructor() {

        this.div = document.createElement("twitter");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () {
            alert("CoVeFe #SoGood #TrumpForPresident #AllGood #Russia"); 
            alert("Ah we hebben onze plicht gedaan, iedereen weet gelijk wat wij doen. Yeaaah hier krijg je wat trump punten.");
        });

        var x = 0.15 * window.innerWidth;
        var y = 0 * window.innerHeight;

        this.move(x, y);
    }

    move(x: number, y: number) {
        this.x = x;
        this.y = y;

        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
}