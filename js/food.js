class Food{
    constructor(){
     this.foodstock = 0
     this.lastfed
     this.image = loadImage("images/milk.png");
    }
 
    updatefoodstock(food){
    this.foodstock=food;
    }
    getfedtime(time){
this.lastfed=time;
    }
    detuctfood(){
      if(this.foodstock>0){
    this.foodstock=this.foodstock-1;
      }
    }
    getfoodstock(){
    return this.foodstock;
    }
    display(){
      var x=80,y=100;
      imageMode(CENTER); 
      image(this.image,720,220,70,70);
      if(this.foodstock!==0){
        for(var i = 0;i<this.foodstock;i++){
          if(i%10===0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
    bedroom(){
  background(bedimg);
    }
    garden(){
      background(garimg);
    }
    livingroom(){
      background(liveimg);
    }
    sleeping(){
      background(sleep);
    }
    washroom(){
      background(washimg);
    }

  }

