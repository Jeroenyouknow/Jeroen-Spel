class Factory extends District {
    constructor() {
        super(0.58, 0.65, document.createElement("buy_4"), document.createElement("factory"), 750, 12);
        console.log(this.m);
        setInterval( () => this.landValue(), 1500);
        setInterval( () => this.population(), 1500);
        setInterval( () => this.money(), 1500);
    }
}