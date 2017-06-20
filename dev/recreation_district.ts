class Recreation extends District {
    constructor() {
        super(0.58, 0.65, document.createElement("buy_1"), document.createElement("recreation"), 500, 800);
        console.log(this.m);
        
        setInterval( () => this.money(), 1500);
    }
}