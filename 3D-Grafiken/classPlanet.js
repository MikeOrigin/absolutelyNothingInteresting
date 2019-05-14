class Planet {
    constructor(x,y,z,texture,rotSpeed, size) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.texture = texture;
        this.rotSpeed =1/rotSpeed*100;
        this.size = size;
    }

    create() {
        push();
        translate(this.x,this.y,this.z);
        rotateY(millis()/1000);
        texture(this.texture);
        noStroke();
        sphere(this.size,24,24);
        pop();
    }
}