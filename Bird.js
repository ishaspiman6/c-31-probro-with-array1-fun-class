class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
   this.image1 = loadImage("sprites/smoke.png") 
   this.array1 = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var pos1 = [this.body.position.x,this.body.position.y]
    //console.log(pos1)
    this.array1.push(pos1)
    console.log(this.array1)
    for(var probro = 0;probro<this.array1.length;probro++){
     image(this.image1,this.array1[probro][0],this.array1[probro][1])
    }
  }
}
