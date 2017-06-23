class Game {

    private audio: HTMLAudioElement;


    constructor() {

        this.audio = new Audio('audio/game_music.mp3');
        this.audio.play();
        this.audio.loop = true;
        this.Spawn();
    }

    private Spawn() {
        let road_Horizontal = new Road(0, 0.45, document.createElement("road_turn"));
        let road_Vertical = new Road(0.5, 0, document.createElement("road"));
        let car_Bottom = new Car(0.545, 1, document.createElement("car_bottom"));
        let car_Top = new Car(0.505, 0, document.createElement("car_top"));
        let car_Right = new Car(1, 0.53, document.createElement("car_right"));
        let car_Left = new Car(0, 0.458, document.createElement("car_left"));
        let recreation_District = new Recreation();
    }

    private endGame(){
        // Coming here will i end the game 
    }
}

