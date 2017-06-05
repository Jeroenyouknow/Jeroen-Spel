class District {

    protected div:HTMLElement;
    
    constructor(a: number,b: number,div: HTMLElement, p: number, l: number) {
       
        document.body.appendChild(div);
   

        var x = a * window.innerWidth;
        var y = b * window.innerHeight;

        this.move(x, y, div);
        this.population(p);
        this.landValue(l);

    }

    move(x: number, y: number, div: HTMLElement) {
        x = x;
        y = y;

        div.style.left = x + "px";
        div.style.top = y + "px";
    }

    population(p: number){
        let city = '';
        if (p = 10) {
           city = 'Je stad heeft geen inwoners';
        }
        if (p < 10) {
           city = 'Het is een kleine stad';
        }
       if (p > 10){
           city = 'Het is een grote stad';
       }
       console.log(city);
    }

    landValue(l: number){
        console.log("Je landwaarde is nu $",l);
    }
}