function Get(id){
    return document.getElementById(id);
}
var monCanva = Get("monCanva");
var Droite = monCanva.getContext("2d");


//axeX.fillStyle = "#FF0000";
//axe X et axe Y
Droite.fillRect(15,317,1320,4);
Droite.fillRect(675,15,4,605);

//graduation X
function graduerX(ax){
    return Droite.fillRect(ax,300,2,40);
};
let ax = -5;
let j=1;
let numGradXpositif = -16;
while (j<=40) {
    ax=ax+40;
    graduerX(ax);
    if (numGradXpositif != 0) {
        Droite.fillText(numGradXpositif,ax,300);
    }
    numGradXpositif++;
    j++;
}
function graduerXTf(axTraiFin){
    return Droite.fillRect( axTraiFin,310,0.5,20);
};
let axTraiFin = 25;
let jTf=1;
while (jTf<=129) {
    axTraiFin = axTraiFin+10;
    graduerXTf(axTraiFin);
    jTf++;
}

//graduation Y
let ay = -2.5;
function graduerY(ay){
    return Droite.fillRect(655,ay,40,1);
};
let i=1;
let numGradYpositif = 7; 
while (i<=15) {
    ay=ay+40;
    graduerY(ay);
    if (numGradYpositif != 0) {
        Droite.fillText(numGradYpositif,695,ay);
    }
    numGradYpositif--;
    i++;
}
let ayTrainFin = 28;
function graduerYTf(ayTrainFin){
    return Droite.fillRect(666,ayTrainFin,20,0.5);
};
let iTf=1;
while (iTf<=57) {
    ayTrainFin=ayTrainFin+10;
    graduerYTf(ayTrainFin);
    iTf++;
}
//cercle
const nbrCercle = Get("nbrCercle");
const btn = Get("btn");

btn.addEventListener('click',()=>{
    let rayon = nbrCercle.value*40;
    Droite.beginPath();
    Droite.arc(675,317,rayon,0,2*Math.PI);
    Droite.stroke();
})

//courbe
let x1 = 15;
let y1 = 320;
let u = 1;
while (u<50) {
    Droite.moveTo(x1,y1);
    Droite.lineTo(x1+5,y1-10);
    Droite.moveTo(x1+5,y1-10);
    Droite.lineTo(x1+10,y1-20);
    Droite.stroke();
    u++;
}

Droite.moveTo(15,320);
Droite.lineTo(20,310);
Droite.moveTo(20,310);
Droite.lineTo(25,300);



