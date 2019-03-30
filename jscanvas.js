//variable declarations
var canv1 = document.querySelector("#canv");
canv1.width = window.innerWidth * 0.8;
canv1.height = window.innerHeight * 0.8;
canv1.style.borderStyle = "dashed";
canv1.style.borderColor = "grey";
canv1.style.borderWidth = "thick";
var x1 = canv1.getContext("2d");
var y1 = 7
var move = {
  x:undefined,
  y:undefined
}
var col1 = {
  yel:"Yellow",
  gr:"Green",
  bl:"Blue",
  re:"Red",
  pi:"Pink",
  pu:"Purple"
}
var pen = col1.re

//function
function draw(x,y,newy2 = y1,newpen = pen){
  x1.beginPath();
  x1.arc(x,y,newy2,0,Math.PI *2);
  x1.fillStyle = newpen;
  x1.fill();
}

//Listeners
window.addEventListener("keypress",function(event){ keyp = event.key;
  if (keyp == "y"){ pen = col1.yel;}
  if (keyp == "g"){ pen = col1.gr;}
  if (keyp == "b"){ pen = col1.bl;}
  if (keyp == "r"){ pen = col1.re;}
  if(keyp == " "){x1.clearRect(0,0,canv1.width,canv1.height)}})

window.addEventListener("keydown",function(event){arrow = event.key;
  if (arrow == "ArrowUp"){y1 += 1;}
  if (arrow == "ArrowDown" && y1 > 1){y1 -= 1;}})

window.addEventListener("mousemove",function(event){move.x = event.x;move.y = event.y;draw(move.x,move.y);})

window.addEventListener("touchmove",function(event){move.x = event.touches[0].clientX;move.y = event.touches[0].clientY;draw(move.x,move.y)})

window.addEventListener("resize",function(event){x1.clearRect(0,0,canv1.width,canv1.height)})

//color picker
document.querySelector(".red").addEventListener("click",function(){pen = col1.re;})
document.querySelector(".yellow").addEventListener("click",function(){pen = col1.yel;})
document.querySelector(".blue").addEventListener("click",function(){pen = col1.bl;})
document.querySelector(".green").addEventListener("click",function(){pen = col1.gr;})
document.querySelector(".pink").addEventListener("click",function(){pen = col1.pi;})
document.querySelector(".purple").addEventListener("click",function(){pen = col1.pu;})
