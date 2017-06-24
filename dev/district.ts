class District {

    public m: number = 0;
    public l: number = 0;
    public p: number = 0;
    protected status: boolean = false;
    public district: HTMLElement;
    private forsale: HTMLElement;
    private bonus: String;
    public interval_district_money: number;
    

    constructor(a: number, b: number, c: number, d: number, div_buy: HTMLElement, div_district: HTMLElement, p: number, l: number, bonus: String) {
        this.district = div_district;
        this.forsale = div_buy;
        this.bonus = bonus;
        this.m = 1000;
        this.l = l;
        this.p = l;


        document.body.appendChild(div_buy);
        var x = a * window.innerWidth;
        var y = b * window.innerHeight;
        var x_d = c * window.innerWidth;
        var y_d = d * window.innerHeight;
        this.move(x, y, x_d, y_d, div_buy, div_district);
        this.forsale.addEventListener("click", (e: MouseEvent) => this.buy(e));

        this.interval_district_money = setInterval(() => this.money(), 1000);
        
    }

     private move(x: number, y: number, x_d: number, y_d: number, div: HTMLElement, div_district: HTMLElement) {
        x = x;
        y = y;

        div.style.left = x + "px";
        div.style.top = y + "px";

        x_d = x_d;
        y_d = y_d;

        div_district.style.left = x_d + "px";
        div_district.style.top = y_d + "px";
    }

     private population() {
        let population = document.getElementById("population");
        population.innerHTML = "Bewoners: " + this.p;
    }


     private landValue() {
        let landvalue = document.getElementById("landvalue");
        landvalue.innerHTML = "Landwaarde: $" + this.l;
    }

     private money() {
        let money = document.getElementById("money");
        money.innerHTML = "Geld: $" + this.m;
    }

     private buy(e: MouseEvent) {
        alert("Deze district kost: $" + this.l);
        let money_need = this.l - this.m;
        if (this.m > this.l) {
            alert("Gefeliciteerd je hebt genoeg geld om dit district te kopen!");
            alert("District aan het bouwen...");
            alert(this.bonus);
            this.forsale.remove();
            this.status = true;
            document.body.appendChild(this.district);
            this.m = this.m - this.l;
            setInterval(() => this.landValue(), 1000);
            setInterval(() => this.population(), 1000);
        }

        else {
            alert("Je hebt nog niet genoeg je moet nog doorsparen!");
            alert("Je moet nog: $" + money_need + " sparen.")
        }
    };
}
