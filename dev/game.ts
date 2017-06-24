class Game {

    private audio: HTMLAudioElement;
    private r_Horizontal: Road;
    private r_Vertical: Road;
    private c_Bottom: Car;
    private c_Top: Car;
    private c_Right: Car;
    private c_Left: Car;
    private recreation_district: Recreation;
    private d: District;
    private interval: number;


    constructor() {

        this.audio = new Audio('audio/game_music.mp3');
        this.audio.play();
        this.audio.loop = true;
        this.r_Horizontal = new Road(0, 0.45, document.createElement("road_turn"));
        this.r_Vertical = new Road(0.5, 0, document.createElement("road"));
        this.c_Bottom = new Car(0.545, 1, document.createElement("car_bottom"));
        this.c_Top = new Car(0.505, 0, document.createElement("car_top"));
        this.c_Right = new Car(1, 0.53, document.createElement("car_right"));
        this.c_Left = new Car(0, 0.458, document.createElement("car_left"));
        this.recreation_district = new Recreation();
        this.interval = setInterval(() => this.endGame(), 2000);
        this.Spawn();
    }

    private Spawn() {
        let road_Horizontal = this.r_Horizontal;
        let road_Vertical = this.r_Vertical;
        let car_Bottom = this.c_Bottom;
        let car_Top = this.c_Top;
        let car_Right = this.c_Right;
        let car_Left = this.c_Left;
        let recreation_District = this.recreation_district;
    }

    private endGame() {
        if (this.recreation_district.m > 5000) {
            this.audio.pause();
            this.r_Horizontal.road.remove();
            this.r_Vertical.road.remove();
            this.c_Bottom.car.remove();
            this.c_Top.car.remove();
            this.c_Right.car.remove();
            this.c_Left.car.remove();
            this.recreation_district.district.remove();

            clearInterval(this.interval);
            clearInterval(this.recreation_district.interval_district_money);

            this.r_Horizontal = undefined;
            this.r_Vertical = undefined;
            this.c_Bottom = undefined;
            this.c_Top = undefined;
            this.c_Right = undefined;
            this.c_Left = undefined;
          
            let audio = new Audio('audio/main.mp3');
            audio.play();
            audio.loop = true;
            let score = document.createElement("score");
            document.body.appendChild(score);
            score.innerHTML = "Geweldig je hebt het spel gehaald je had de volgende score:<br> Geld: $" + this.recreation_district.m +"<br> Bewoners: " + this.recreation_district.p + "<br> Landwaarde: " + this.recreation_district.l + "<br>Bedankt voor het spelen!";

              this.recreation_district = undefined;
    }
}
}


