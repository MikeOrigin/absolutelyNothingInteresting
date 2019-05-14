function preload() {
    erdeImg = loadImage('Planetentexturen/earth.jpg');
    discoImg = loadImage('Planetentexturen/discokugel.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
//  let lightBlue = [50, 202, 303];
    ambientLight(160);
    directionalLight(200, 0, 0, 1, -1, -1);
    earth = new Planet(0,0,0,erdeImg,10,100);
    discokugel = new Planet(100,-200,-10,discoImg,10,40);
  }
   
  function draw() {
    background(0);
    discokugel.create();
    earth.create();
  }