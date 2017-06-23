class Recreation extends District {
    constructor() {
        super(0.58, 0.65, document.createElement("buy_1"), document.createElement("recreation"), 500, 800);
        setInterval(() => this.addMoney(), 2000);

        let div = document.getElementById("recreation");
         div.addEventListener("click", function () {
            let audio = new Audio('audio/Car_horn.mp3');
            audio.play();
        });
    }

    addMoney() {
        if (this.status === true) {
            this.m = this.m + 100;
        }
    }
}