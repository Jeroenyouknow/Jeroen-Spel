class District {

    protected m: number;
    protected l: number;
    protected p: number;

    constructor(a: number, b: number, div_buy: HTMLElement, div_district: HTMLElement, p: number, l: number, m: number) {

        document.body.appendChild(div_buy);
        var x = a * window.innerWidth;
        var y = b * window.innerHeight;
        this.move(x, y, div_buy);
        div_buy.addEventListener("click", this.buy);

    }

    move(x: number, y: number, div: HTMLElement) {
        x = x;
        y = y;

        div.style.left = x + "px";
        div.style.top = y + "px";
    }

    population() {
        let population = document.getElementById("population");
        population.innerHTML = "Bewoners: " + this.p;
    }


    landValue() {
        let landvalue = document.getElementById("landvalue");
        landvalue.innerHTML = "Landwaarde: " + this.l;
    }

    money() {
        let money = document.getElementById("money");
        money.innerHTML = "Geld: $" + this.m;
    }

    buy() {

        if (this.m === this.l) {
            alert("Gefeliciteerd je hebt genoeg geld om dit district te kopen!");
            alert("District aan het bouwen...");
            let buy = div_buy;
            buy.remove();
            document.body.appendChild(div_district);
            this.m = this.m - this.l;
        }


    };
}
