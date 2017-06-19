class Recreation extends District {
    constructor() {
        super(0.58, 0.65, document.createElement("buy_1"), document.createElement("recreation"), 0, 0, 0);

        this.l = 750;
        this.landValue();
        this.p = 5;
        this.population();
        this.m = 1000;
        this.money();
        setInterval(this.addMoney, 1500);
    }



    addMoney(){
       
    }
}