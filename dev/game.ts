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

        this.Spawn();
    }

    private Spawn() {
        let road_Horizontal = this.r_Horizontal;
        let road_Vertical = this.r_Vertical;
        let car_Bottom = this.c_Bottom;
        let car_Top = this.c_Top;
        let car_Right = this.c_Right;
        let car_Left = this.c_Left;
    }
}


