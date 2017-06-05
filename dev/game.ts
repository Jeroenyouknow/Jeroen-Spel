/// <reference path="car.ts"/>

class Game {

     private road :Array<Road>;

    constructor() {
        
        this.road = new Array<Road>();
        let recreation = new Recreation();
        
        for(let i = 0; i < 11; i++){
            this.Gameloop(i);    
        }
    }  

    private Gameloop(i: number){
        i = i/10;
        this.road.push(new Road(0.5,i,document.createElement("road")));
        this.road.push(new Road(i,0.5,document.createElement("road_turn")));
        let car = new Car(0.55,1,document.createElement("car"),100); 
        let car_return = new Car(0.51,0,document.createElement("car_return"),100);
        let car_right = new Car(1,0.57,document.createElement("car_right"),100);
        let car_left = new Car(0,0.51,document.createElement("car_left"),100);
        
    }   
} 

