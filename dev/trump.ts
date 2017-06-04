class Trump extends Character {
    //Position
    x: number;
    y: number;
    //Div
    div: HTMLElement;

constructor(){
 super();
    this.div = document.createElement("trump");
    document.body.appendChild(this.div);

    this.div.addEventListener("click", function () {
            alert("Hallo ik ben Trump ga je mij helpen om Amerika opnieuw op te bouwen?  Zoals je kan zien rijden er nu auto's maar niet amerikaans! Doe er wat aan!");
        });

    var x = 0.25 * window.innerWidth;
    var y = 0.35 * window.innerHeight;
    this.move(x, y);}

    move(x: number, y: number) {
        this.x = x;
        this.y = y;

        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
}
}