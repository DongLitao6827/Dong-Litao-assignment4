function setup() {
  createCanvas(800,600)
  background(50)
  angleMode(DEGREES)
  colorMode(HSB,255)

//text 
  textSize(22);
  fill(0,0,200);
  text("Click to show the time!", 293, 530);
  
  }

//click mouse to show time
var bool= false
function mouseClicked() {
 bool=! bool
}
 
function draw() {
 translate(width/2,height/2) 
 
 //hour
 var ho 
 if (hour()>12){
   ho = hour()-12
 }else{
   ho = hour()
 }
 
 for(var h = 1; h <= 12; h++){
   
   if(bool== true && h == ho){
     
     fill(150,255,255)
    }
   if(bool== true && h != ho){
     
     fill(150,255,20)
    }
   if(bool== false){
     fill(150,random(255),255)
    }
  
  push()
  rotate(h * 30)
  noStroke()
  rect(-3,-50,6,30)
  pop()
 }
 
 
  //min
 for(var m = 0; m <= 59; m++){
   
   if(bool== true && m == minute()){
     
     fill(240,255,255)
    }
   if(bool== true && m != minute()){
     
     fill(240,255,50)
    }
   if(bool== false){
     fill(240,random(255),255)
    }
  
  push()
  rotate(m * 6)
  noStroke()
  rect(-2.5,-110,5,40)
  pop()
 }

 //sec
 for(var s = 0; s <= 59; s++){
   
   if(bool== true && s == second()){
     
     fill(40,255,255)
    }
   if(bool== true && s != second()){
     
     fill(40,255,20)
    }
   if(bool== false){
     fill(40,random(255),255)
    }
  
  push()
  rotate((s+1) * 6)
  noStroke()
  rect(-2.5,-190,5,80)
  pop()
 }
}


