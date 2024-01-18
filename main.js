var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
ctx.moveTo(10,30);
ctx.lineTo(470,30);
ctx.font="25px Arial";
ctx.fillText("Yılan",170,23);
ctx.fillText("Oyunu",240,23);
ctx.fillStyle="#FF0000";
var skor=0;

var arkaplanImg = new Image();
arkaplanImg.src = "arkaplan.png";
var yemekImg = new Image();
yemekImg.src = "food.png";
var kenar=32;
var yilan=[];
yilan[0]={x:7*kenar,y:8*kenar};
var yemek = {
    x : Math.floor(Math.random()*15) * kenar,
    y : Math.floor(Math.random()*15) * kenar
}
var istikamet; 
oyun = setInterval(ciz,300);

document.addEventListener("keydown", yon);

function yon(event) {
    if( event.keyCode == 37 && istikamet != "SAG")
        istikamet = "SOL";
    else if( event.keyCode == 38 && istikamet != "ASAGI")
        istikamet = "YUKARI";
    else if( event.keyCode == 39 && istikamet != "SOL")
        istikamet = "SAG";
    else if( event.keyCode == 40 && istikamet != "UP")
        istikamet = "ASAGI";
}

function ciz() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Skor: " + skor, 10, 20);
    ctx.drawImage(arkaplanImg,0,30);
    for( i = 0 ; i < yilan.length ; i++) {
        if(i==0)
            ctx.fillStyle="red";
        else
            ctx.fillStyle="white";
        ctx.fillRect(yilan[i].x,yilan[i].y,kenar,kenar);
    }
    ctx.drawImage(yemekImg,yemek.x,yemek.y);
    x0 = yilan[0].x;
    y0 = yilan[0].y;
    if( istikamet == "SOL")
        x0 -=kenar;
    if( istikamet == "ASAGI") 
         y0 += kenar;
    if( istikamet == "SAG")
        x0 += kenar;
    if( istikamet == "YUKARI") 
        y0 -= kenar;
    var yeniBas = {x:x0, y:y0};
    yilan.unshift(yeniBas);
    if(yeniBas.x==yemek.x && yeniBas.y==yemek.y){
        yemek = {
            x : Math.floor(Math.random()*15) * kenar,
            y : Math.floor(Math.random()*15) * kenar
        };
        skoruArtir();
    }
    else
         yilan.pop();

    if(yeniBas.x<0 || yeniBas.x>14*kenar ||
         yeniBas.y<0 || yeniBas.y>14*kenar )
        clearInterval(oyun);
}
function skoruArtir() {
    skor++;
}