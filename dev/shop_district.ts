class Shop extends District {
    constructor() {
        super(0.58, 0.65, document.createElement("buy_3"), document.createElement("shop"), 10, 12);
        console.log(this.m);
        setInterval( () => this.landValue(), 1500);
        setInterval( () => this.population(), 1500);
        setInterval( () => this.money(), 1500);
    }
}