class Recreation extends District {
    constructor() {
        super(0.58, 0.65, document.createElement("buy_1"), document.createElement("recreation"), 10, 12, 200);
        console.log(this.m);
        setInterval( () => this.landValue(), 1500);
        setInterval( () => this.population(), 1500);
        setInterval( () => this.money(), 1500);
    }
}