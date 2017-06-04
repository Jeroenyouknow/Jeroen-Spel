/// <reference path="car.ts"/>

class Game {

     private road :Array<Road>;

    constructor() {
        
        this.road = new Array<Road>();
        
        for(let i = 0; i < 11; i++){
            this.Gameloop(i);    
        }
    }  

    private Gameloop(i: number){
        i = i/10;
        this.road.push(new Road(i));
        let car = new Car(0.55,1,document.createElement("car")); 
        let car_return = new Car(0.51,0,document.createElement("car_return"));
    }   
} 

