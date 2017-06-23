class Recreation extends District {
    constructor() {
        super(0.75, 0.65, 0.582, 0.595, document.createElement("buy_1"), document.createElement("recreation"), 500, 800);
        setInterval(() => this.addMoney(), 2000);

        this.district.addEventListener("click", function () {
            let audio = new Audio('audio/recreation.mp3');
            audio.play();
        });
    }

    addMoney() {
        if (this.status === true) {
            this.m = this.m + 100;
        }
    }
}