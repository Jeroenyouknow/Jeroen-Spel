class Coin{
        constructor(a: number, b: number, div: HTMLElement, g: number) {

        document.body.appendChild(div);
        div.addEventListener("click", function () {
            let audio = new Audio('../docs/audio/coin.mp3');
            audio.play();
        });

        var x = a * window.innerWidth;
        var y = b * window.innerHeight;

        this.move(x, y, div);
        this.addCoin(g,div);


    }

    move(x: number, y: number, div: HTMLElement) {
        x = x;
        y = y;

        div.style.left = x + "px";
        div.style.top = y + "px";
    }

addCoin(g: number,div: HTMLElement){
    let coin = document.getElementById("coin_amount");
    coin.innerHTML = "Je hebt $1000 coins op dit moment";

    div.addEventListener("click", function () {
        g++;
        coin.innerHTML = "Je hebt $" + g + " coins op dit moment";
    });

    
}
}

