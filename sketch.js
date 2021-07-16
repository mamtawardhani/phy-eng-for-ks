//namespacing
var E = Matter.Engine;
var W = Matter.World;
var B = Matter.Bodies;

var en, wo
var box, ground;

function setup(){
  createCanvas(400,400);

  en = E.create()
console.log(en)
  wo = en.world
  console.log(wo)

  box = B.rectangle(100,20,50,20)
  W.add(wo, box)

  var a ={isStatic: true} //JSON (java script object notations)
  ground = B.rectangle(200,350,400,20, a)
  W.add(wo, ground)
}

function draw(){
  background("black");
  
  E.update(en)
  rectMode(CENTER);
  rect(box.position.x, box.position.y,50,20)
  rect(ground.position.x, ground.position.y, 400,20)

}

//rectangle=> rect()
//circle=> ellipse()
