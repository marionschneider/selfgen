
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
  text("Selfgen a été créé grâce à une IA et StyleGAN.",windowWidth/2, windowHeight/2-30);
  text("L'artiste l'a programmé afin de créer de nouvelles images d'iel.",windowWidth/2, windowHeight/2);
  text("À chaque clic, un tout nouveau selfie de l'artiste est créé pour toi. ",windowWidth/2, windowHeight/2+30);
  text("Selfgen a appris à créer ces images grâce à une base de données de portraits humains et de selfies de l'artiste. ",windowWidth/2, windowHeight/2+60);
  text("Chaque selfie que tu vois est unique et a été créé spécialement pour toi sur demande.",windowWidth/2, windowHeight/2+90);
  text("Pour économiser de précieuses ressources, Selfgen s'endort quand il n'est pas utilisé.",windowWidth/2, windowHeight/2+120);
  text("En fonction d'à quand remonte sa dernière utilisation, Selfgen peut mettre un moment à se réveiller.",windowWidth/2, windowHeight/2+150);
  text("Chaque selfie que Selfgen génère coûte 0.01$ à l'artiste.",windowWidth/2, windowHeight/2+180);
  text("L'artiste ne verra jamais les selfies que tu viens de voir.",windowWidth/2, windowHeight/2+210);
  text("Si tu veux partager des images tague @_marionschneider sur Instagram",windowWidth/2, windowHeight/2+240);

  //textSize(10);
  //text("if you want to share some 📷 tag the artist @_marionschneider",windowWidth/2, windowHeight/2+60);


}