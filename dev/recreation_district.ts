class Recreation extends District {
    protected interval_AddMoney: number;
    protected interval_AddPeople: number;
    protected interval_RemoveValue: number;

    constructor() {
        super(0.75, 0.65, 0.582, 0.595, document.createElement("buy_1"), document.createElement("recreation"), 500, 1000, 'Met het Recreation District krijg je om de 7 secoden $500 inkomsten. Maar om de 5 seconden gaat er $10 landwaarde af.');
        this.interval_AddMoney = setInterval(() => this.addMoney(), 7000);
       this.interval_AddPeople =  setInterval(() => this.addPeople(), 500);
        this.interval_RemoveValue = setInterval(() => this.removeValue(), 5000);
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

            if (this.l === 0) {
                this.l = 0;
            }
        }
    }
}