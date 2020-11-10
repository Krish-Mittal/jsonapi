class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1=loadImage("sprites/smoke.png")
    this.na=[]
  }

  display() {
    if(this.body.velocity.x>5&&this.body.position.x>200){
    var pos=[this.body.position.x,this.body.position.y]
    this.na.push(pos);
    }
    for(var i=0;i<this.na.length;i++){
    image(this.image1,this.na[i][0],this.na[i][1])
    }
    super.display();
  }
}
