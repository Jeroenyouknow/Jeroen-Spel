class Game {
    
    private audio:HTMLAudioElement;
    private  money:number;
    private  fame:number;
    private  population:number;

     private road :Array<Road>;

    constructor() {

        this.audio = new Audio('audio/game_music.mp3');
        this.audio.play();
        this.audio.loop = true;
        
        this.road = new Array<Road>();
this.Spawn();
        
       
    }
    private Spawn(){
        this.road.push(new Road(0,0.5,document.createElement("road_turn")));
        this.road.push(new Road(0.5,0,document.createElement("road")));
        let car = new Car(0.55,1,document.createElement("car")); 
        let car_return = new Car(0.51,0,document.createElement("car_return"));
        let car_right = new Car(1,0.57,document.createElement("car_right"));
        let car_left = new Car(0,0.51,document.createElement("car_left"));
        let stop_sign = new Sign(0.45,0.38,document.createElement("stop_sign"));
        let recreation_district = new Recreation();
    }  

    private Stats(){
        let money_balance = this.money
    }
} 

