class District {

    protected m: number = 0;
    protected l: number = 0;
    protected p: number = 0;
    private district: HTMLElement;
    private forsale: HTMLElement;

    constructor(a: number, b: number, div_buy: HTMLElement, div_district: HTMLElement, p: number, l: number) {
        this.district = div_district;
        this.forsale = div_buy;
        this.m = 1000;
        this.l = l;
        this.p = l;

        document.body.appendChild(div_buy);
        var x = a * window.innerWidth;
        var y = b * window.innerHeight;
        this.move(x, y, div_buy, div_district);
        this.forsale.addEventListener("click", (e: MouseEvent) => this.buy(e));

        setInterval( () => this.money(), 1000);
    }

    move(x: number, y: number, div: HTMLElement, div_district: HTMLElement) {
        x = x;
        y = y;

        div.style.left = x + "px";
        div.style.top = y + "px";

        div_district.style.left = x + "px";
        div_district.style.top = y + "px";
    }

    population() {
        let population = document.getElementById("population");
        population.innerHTML = "Bewoners: " + this.p;
    }


    landValue() {
        let landvalue = document.getElementById("landvalue");
        landvalue.innerHTML = "Landwaarde: $" + this.l;
    }

    money() {
        let money = document.getElementById("money");
        money.innerHTML = "Geld: $" + this.m;
        console.log(this.m)
    }

    buy(e:MouseEvent) {
        alert("Deze district kost: $"+this.l);
        let money_need = this.l - this.m;
        if (this.m > this.l) {
            alert("Gefeliciteerd je hebt genoeg geld om dit district te kopen!");
            alert("District aan het bouwen...");
           this.forsale.remove();
            document.body.appendChild(this.district); 
            this.m = this.m - this.l;
            setInterval( () => this.landValue(), 1000);
            setInterval( () => this.population(), 1000);
        }

        else{
            alert("Je hebt nog niet genoeg je moet nog doorsparen!");
            alert("Je moet nog: $"+ money_need+" sparen.")
        }


    };
}
