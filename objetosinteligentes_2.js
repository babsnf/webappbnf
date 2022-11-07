var tabela;
var janeiro; 
var fevereiro;
var marco;
var abril;
var maio; 
var junho;
var julho;
var agosto;

var r1; 
var r2;
var r3;
var r4;
var r5; 
var r6;
var r7;
var r8;

var d;

var x1 = 400;
var y1 = 400;
var x2= 500;
var y2= 200;
var x3= 600;
var y3= 300;
var x4= 700;
var y4= 450;
var x5= 800;
var y5= 350;
var x6= 900;
var y6= 250;
var x7= 900;
var y7= 450;
var x8= 1050;
var y8= 400;


var font;

function preload(){
 
  tabela= loadTable('tabela/dados.csv', 'csv', 'header');
  
}

function setup() {
print(tabela.getRowCount() + 'linhas na tabela');
print(tabela.getColumnCount() + 'colunas na tabela');

createCanvas(windowWidth, windowHeight);
janeiro = tabela.getNum(0, 'horas ');
fevereiro = tabela.getNum(1, 'horas ');
marco = tabela.getNum(2, 'horas ');
abril = tabela.getNum(3, 'horas ');
maio = tabela.getNum(4, 'horas ');
junho = tabela.getNum(5, 'horas ');
julho = tabela.getNum(6, 'horas ');
agosto = tabela.getNum(7, 'horas ');

print(janeiro);

  font = loadFont ('Spartan-Bold.ttf');
}


function draw() {
  background(0);
  
  fill(255); 
  text('hours watched per',windowWidth/2,50);
  fill(20,20,255);
  text('month', windowWidth/2 + 145, 50);
  textAlign(CENTER);
  textFont(font);

  // janeiro

  fill(200,150,200);
  noStroke();  


r1=janeiro/2;
ellipse(x1,y1,r1,r1); 

  if (r1 <= 172){
  janeiro=janeiro+2; 
     } 
     
d = dist(mouseX, mouseY, x1, y1); //elipse mudando quando passa o mouse
if (d < r1) {
  fill(210,120,200);
  ellipse(x1,y1,r1+10,r1+10);
  
  fill(20,20,255);
  text('86 hours',400,430);
  textSize(10);
} 


  fill(20,20,255);
  text('JAN',400,405);
  textSize(20); 
  textAlign(CENTER);
  textFont(font);


//fevereiro 
  fill(150,125,200);
  noStroke();  
  
r2=fevereiro/2;
ellipse(x2,y2, r2, r2); 

  if (r2 <= 106){
  fevereiro=fevereiro+2; 
     } 
     
d = dist(mouseX, mouseY, x2, y2); //elipse mudando quando passa o mouse
if (d < r2) {
  fill(160,115,200);
  ellipse(x2,y2,r2+10,r2+10);
  
  fill(20,20,255);
  text('53 hours',500,230);
  textSize(10);

} 

  fill(20,20,255);
  text('FEB',500,205);
  textSize(20); 
  textAlign(CENTER);
  textFont(font);


    //marco
  fill(175,205,200);
  noStroke();  
r3=marco/2;
ellipse(x3,y3, r3, r3); 

  if (r3 <= 114){
marco=marco+2; 
     } 

d = dist(mouseX, mouseY, x3, y3); //elipse mudando quando passa o mouse
if (d < r3) {
  fill(185,195,200);
  ellipse(x3,y3,r3+10,r3+10);
  
  fill(20,20,255);
  text('57 hours',600,330);
  textSize(10);

} 


  fill(20,20,255);
  text('MAR',600,305);
  textSize(20); 
  textAlign(CENTER);
  textFont(font);

    //abril
  fill(150,125,225);
  noStroke();  
r4=abril/2;
ellipse(x4,y4, r4, r4); 

  if (r4 <= 102){
abril=abril+2; 
     } 
     
d = dist(mouseX, mouseY, x4, y4); //elipse mudando quando passa o mouse
if (d < r4) {
  fill(165,115,225);
  ellipse(x4,y4,r4+15,r4+15);
  
  fill(20,20,255);
  text('68 hours',700,480);
  textSize(10);

} 

  fill(20,20,255);
  text('APR',700,455);
  textSize(20); 
  textAlign(CENTER);
  textFont(font);
    
    //maio
  fill(130,175,200);
  noStroke();  
r5=maio/2;
ellipse(x5,y5, r5, r5); 

  if (r5 <= 90){
maio=maio+2; 
     } 
d = dist(mouseX, mouseY, x5, y5); //elipse mudando quando passa o mouse
if (d < r5) {
  fill(145,165,225);
  ellipse(x5,y5,r5+25,r5+25);
  
  fill(20,20,255);
  text('45 hours',800,380);
  textSize(10);

} 

  fill(20,20,255);
  text('MAY',800,355);
  textSize(20); 
  textAlign(CENTER);
  textFont(font);
  
    //junho
  fill(200,145,200);
  noStroke();  
r6=junho/2;
ellipse(x6,y6, r6, r6); 

  if (r6 <= 100){
junho=junho+2; 
     } 
     
d = dist(mouseX, mouseY, x6, y6); //elipse mudando quando passa o mouse
if (d < r6) {
  fill(210,155,200);
  ellipse(x6,y6,r6+15,r6+15);
  
  fill(20,20,255);
  text('50 hours',900,280);
  textSize(10);

} 

  fill(20,20,255);
  text('JUN',900,255);
  textSize(20); 
  textAlign(CENTER);
  textFont(font);
  
    //julho
  fill(220,145,200);
  noStroke();  
r7=julho/2;
ellipse(x7,y7, r7, r7); 

  if (r7 <= 136){
julho=julho+2; 
     } 
d = dist(mouseX, mouseY, x7, y7); //elipse mudando quando passa o mouse
if (d < r7) {
  fill(230,155,200);
  ellipse(x7,y7,r7+15,r7+15);
  
  fill(20,20,255);
  text('68 hours',900,480);
  textSize(10);

} 
  fill(20,20,255);
  text('JUL',900,455);
  textSize(20); 
  textAlign(CENTER);
  textFont(font);
  
      //agosto
  fill(200,145,200);
  noStroke();  
r8=agosto/2;
ellipse(x8,y8, r8, r8); 

  if (r8 <= 106){
agosto=agosto+2; 
     } 
d = dist(mouseX, mouseY, x8, y8); //elipse mudando quando passa o mouse
if (d < r8) {
  fill(210,155,200);
  ellipse(x8,y8,r8+15,r8+15);
  
  fill(20,20,255);
  text('53 hours',1050,430);
  textSize(10);

} 
  fill(20,20,255);
  text('AUG',1050,405);
  textSize(20); 
  textAlign(CENTER);
  textFont(font);
}
