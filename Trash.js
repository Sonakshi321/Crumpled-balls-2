class Trash {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          restitution:0.8,
          friction:0.3,
          density:1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
     var pos =this.body.position;
     fill(0,255,0);
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();

    }
  };