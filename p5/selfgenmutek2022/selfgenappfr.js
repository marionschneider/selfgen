// inspird by Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/150-runway-rainbows.html


let rainbow;
let model;
let loading;


i=0;

function entryAnimation(){
  
  //fill(255,105,180);
  fill(0);
  textAlign(CENTER);
  textStyle(NORMAL);
  textSize(60);
  text("✨Selfgen🤖 te souhaite la bienvenue",windowWidth/2, windowHeight/2 );

  clicktextcolor = color(0, 0, 0);
  clicktextcolor.setAlpha(128 + 128 * sin(millis() / 1000));
  fill(clicktextcolor);
  textAlign(CENTER);
  textStyle(ITALIC);
  textSize(20);
  text("Clique n'importe où pour voir un tout nouveau 🔥selfie de l'artiste",windowWidth/2, windowHeight/2+60);

 
  }

function loadAnimlong(){
fill(0);
  textAlign(CENTER);
  textStyle(ITALIC);
  textSize(15);
  text("Cela peut prendre plusieurs minutes, inspire - expire 💜",windowWidth/2, windowHeight/2+40);
;
  }

 function loadAnimation(){ 

  //console.log(i);
  //console.log("loading anim starting");
  clear();
  clicktextcolor = color(0, 0, 0);
  clicktextcolor.setAlpha(128 + 128 * sin(millis() / 1000));
  fill(clicktextcolor);
  textAlign(CENTER);
  textStyle(NORMAL);
  textSize(50);
  text("Selfgen se réveille...",windowWidth/2, windowHeight/2);

loadAnimlong();

  }



function setup() {

  
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(generateRainbow);

  d = 10;
  g = 100;

  
  model = new rw.HostedModel({
    url: "https://selfieodelexp1-d5753042.hosted-models.runwayml.cloud/v1/",
  });
  
  textFont("Arial");

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function generateRainbow() {

  loading = true;

console.log("generating the rainbow");
  const z = [];
  for (let i = 0; i < 512; i++) {
    z[i] = random(-1, 1);
  }
  const path = "http://localhost:8000/query";
  const data = {
    z: z,
    truncation: 1
  };
  
  model.query(data).then(outputs => {
    const { image } = outputs;
    
    rainbow = createImg(image);
    rainbow.hide();
    
    // use the outputs in your project

  });
}

function gotError(error) {
  console.error(error);
  console.log("not enough cash");
}

// function gotImage(result) {
//   rainbow = createImg(result.image);
//   rainbow.hide();
// }

function mouseClicked() {
  //loadAnimation();
  console.log('mouse clicked');

  d = d + 10;
  console.log(i);

  if (rainbow) {
i = i+1;
    image(rainbow, 0,0);
  }

}



function draw() {
//clear();
  background(255);
entryAnimation();

if (i>= 30){

  rainbow=false;
  loading=false;

   //console.log(i);
  //console.log("loading anim starting");
   clear();
  //fill(0);
  //textAlign(CENTER);
  //textStyle(NORMAL);
  //textSize(90);
  //text("🙏",windowWidth/2, windowHeight/2 );

  
  fill(0);
  textAlign(CENTER);
  textStyle(ITALIC);
  textSize(15);
  text("Etant donné que Selfgen est conscient des ressources qu'il utilise 🌱⚡ et fonctionne en temps réel,",windowWidth/2, windowHeight/2-30);
  text("nous sommes au regret de t'informer que tu as atteint ta limite de génération d'images.",windowWidth/2, windowHeight/2);
  text("Nous espérons que tu as apprécié les 🔥 selfies de l'artiste !",windowWidth/2, windowHeight/2+30);
  text("Clique sur le + pour en savoir d'avantage.",windowWidth/2, windowHeight/2+60);

  //textSize(10);
  //text("if you want to share some 📷 tag them @_marionschneider",windowWidth/2, windowHeight/2+60);

  }
if (loading){
//  console.log("loading animation should occur");
  loadAnimation();

}

if (rainbow) {
//console.log("displaying rainbow");
imageMode(CENTER);
translate(width / 2, height / 2);
//rainbow.resize(800, 800);
image(rainbow, 0,0);

}  


}