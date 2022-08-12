const myImg=[{src:"./images/mem2.png",id:1},{src:"./images/mem2.png",id:2},{src:"./images/mem3.png",id:3},{src:"./images/mem1.png",id:1},{src:"./images/mem2.png",id:2},{src:"./images/mem3.png",id:3}]
const body = document.querySelector("body");
const divm = document.querySelector("#maindav");
//load picture
const loadPic=()=>{
    
for(i=0;i<myImg.length;i++){
let img=document.createElement("img")
img.src=myImg[i].src 
let contDiv=document.createElement("div")
contDiv.className=".grid-container"
let Newdiv=document.createElement("div")
//let divC = document.querySelector(".grid-item"+1)
Newdiv.className=".grid-item"+1
Newdiv.className=".grid-item"
//body.append(divm)
body.append(contDiv)
contDiv.append(Newdiv)
//body.append(divC)
//divC.id=i
//divC.append(img)
Newdiv.id=i
Newdiv.append(img)
}}
body.onload=loadPic()
