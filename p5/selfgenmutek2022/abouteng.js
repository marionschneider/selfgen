
function setup() {

  
  cnv = createCanvas(windowWidth, windowHeight);

  d = 10;
  g = 100;
  
  textFont("Arial");

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}





function draw() {
//clear();
  background(255);

fill(0);
textAlign(CENTER);
  textStyle(ITALIC);
  textSize(90);
  text("Selfgen?",windowWidth/2, windowHeight/2-180);

  fill(0);
  textAlign(CENTER);
  textStyle(ITALIC);
  textSize(15);
  text("Selfgen is made with Ai and uses StyleGAN.",windowWidth/2, windowHeight/2-30);
  text("The artist programmed it to generate new images of themselves.",windowWidth/2, windowHeight/2);
  text("Everytime you click somewhere a brand new selfie of the artist is made and displayed. ",windowWidth/2, windowHeight/2+30);
  text("Selfgen has learned to create these images with a database of diverse human faces and selfies of the artist. ",windowWidth/2, windowHeight/2+60);
  text("Every selfie you see on screen is unique and has been made exclusively for you on demand.",windowWidth/2, windowHeight/2+90);
  text("To save precious ressources Selfgen is put to sleep when not used.",windowWidth/2, windowHeight/2+120);
  text("Depending on how long it has been asleep, it can take a while to wake up.",windowWidth/2, windowHeight/2+150);
  text("Every selfie you ask Selfgen to make costs 0.01$ to the artist.",windowWidth/2, windowHeight/2+180);
  text("The artist will never see the selfies you just saw.",windowWidth/2, windowHeight/2+210);
  text("If you want to share some images you can tag the artist @_marionschneider on Instagram",windowWidth/2, windowHeight/2+240);

  //textSize(10);
  //text("if you want to share some 📷 tag the artist @_marionschneider",windowWidth/2, windowHeight/2+60);


}