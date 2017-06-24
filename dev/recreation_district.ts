class Recreation extends District {
    constructor() {
        super(0.75, 0.65, 0.582, 0.595, document.createElement("buy_1"), document.createElement("recreation"), 500, 1000, 'Met het Recreation District krijg je om de 7 secoden $500 inkomsten. Maar om de 5 seconden gaat er $10 landwaarde af.');
        setInterval(() => this.addMoney(), 7000);
        setInterval(() => this.addPeople(), 500);
        setInterval(() => this.removeValue(), 5000);
        this.district.addEventListener("click", function () {
            let audio = new Audio('audio/recreation.mp3');
            audio.play();
        });
    }

    public addMoney() {
        if (this.status === true) {
            this.m = this.m + 500;
        }
    }

    public addPeople() {
        if (this.status === true) {
            this.p = this.p + 1;
        }

    }

    public removeValue() {
        if (this.status === true) {
            this.l = this.l - 10;
        }
    }
}