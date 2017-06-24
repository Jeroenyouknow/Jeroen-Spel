class Recreation extends District {
    constructor() {
        super(0.75, 0.65, 0.582, 0.595, document.createElement("buy_1"), document.createElement("recreation"), 500, 800, 'Met het Recreation District krijg je om de 5 secoden $500 inkomsten');
        setInterval(() => this.addMoney(), 5000);

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
}