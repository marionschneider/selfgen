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
  textSize(90);
  text("welcome to ✨selfgen🤖",windowWidth/2, windowHeight/2 );

  clicktextcolor = color(0, 0, 0);
  clicktextcolor.setAlpha(128 + 128 * sin(millis() / 1000));
  fill(clicktextcolor);
  textAlign(CENTER);
  textStyle(ITALIC);
  textSize(20);
  text("click anywhere to see a brand new Ai generated 🔥selfie of the artist",windowWidth/2, windowHeight/2+60);

 
  }

function loadAnimlong(){
fill(0);
  textAlign(CENTER);
  textStyle(ITALIC);
  textSize(15);
  text("It can take up to a few minutes, breathe in - breathe out 💜",windowWidth/2, windowHeight/2+40);
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
  text("Selfgen is waking up...",windowWidth/2, windowHeight/2);

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
  text("Since Selfgen is working remotely for you on demand and is conscious of the ressources it uses 🌱⚡,",windowWidth/2, windowHeight/2-30);
  text("we're sorry to inform you that you have reached your image generation limit.",windowWidth/2, windowHeight/2);
  text("We hope you enjoyed contemplating the artist's 🔥 Selfies !",windowWidth/2, windowHeight/2+30);
  text("Click on the + sign if you want to know more.",windowWidth/2, windowHeight/2+60);

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