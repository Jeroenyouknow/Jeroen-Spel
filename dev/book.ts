class Book {
    //Color
    color: number;
    //Position
    x: number;
    y: number;
    //Div
    div: HTMLElement;

    constructor() {

        this.div = document.createElement("book");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () {
            alert("Ah mijn vertrouwde boek voor presidenten. Met daarin de lanceer codes : 2345. Natuurlijk het landnummer van Rusland. Maar het belangrijkste nog wel mijn Twitter naam.  Hey pratend over Twitter laat me eens een geweldige twee verzenden! #MakeAmericaGreatAgain");
        });

        var x = 0 * window.innerWidth;
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