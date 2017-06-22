class Game {

    private audio: HTMLAudioElement;
    private road: Array<Road>;

    constructor() {

        this.audio = new Audio('audio/game_music.mp3');
        this.audio.play();
        this.audio.loop = true;
        this.road = new Array<Road>();
        this.Spawn();
        this.methodes();
    }

    public Spawn() {
        this.road.push(new Road(0, 0.45, document.createElement("road_turn")));
        this.road.push(new Road(0.5, 0, document.createElement("road")));
        let car_bottom = new Car(0.53555555, 1, document.createElement("car_bottom"));
        let car_top = new Car(0.505, 0, document.createElement("car_top"));
        let car_right = new Car(1, 0.56555555, document.createElement("car_right"));
        let car_left = new Car(0, 0.50555555, document.createElement("car_left"));
        let recreation_district = new Recreation();
        // let shop_district = new Shop();
        // let factory_district = new Factory();
        // let living_district = new Living();
    }

    private methodes() {
        // let help = document.createElement("help");
        // document.body.appendChild(help);
        // let end = document.createElement("end");
        // document.body.appendChild(end);
    }

    private endGame(){
        
    }
}

