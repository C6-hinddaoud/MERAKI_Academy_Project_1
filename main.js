const myImg=[{src:"./images/mem1.png",id:1},{src:"./images/mem2.png",id:2},{src:"./images/mem3.png",id:3},{src:"./images/mem1.png",id:1},{src:"./images/mem2.png",id:2},{src:"./images/mem3.png",id:3}]
const body = document.querySelector("body");
const divm = document.querySelector("#maindav");
//load picture




//let img;
//let Newdiv=document.createElement("div")

const loadPic=()=>{
    let contDiv=document.createElement("div")   
for(i=0;i<myImg.length;i++){
    let img=document.createElement("img")
img.src=myImg[i].src 
img.id=myImg[i].id
img.className="imgdis"
//img.style.visibility="visible"
//let contDiv=document.createElement("div")
contDiv.className="grid-container"
 let Newdiv=document.createElement("div")
//let divC = document.querySelector(".grid-item"+1)
Newdiv.className="grid-item"+1
Newdiv.className="grid-item"
//body.append(divm)
body.append(contDiv)
contDiv.append(Newdiv)
//body.append(divC)
//divC.id=i
//divC.append(img)
Newdiv.id="d"+i
Newdiv.append(img)
}}
body.onload=loadPic()


let b=document.querySelectorAll(".imgdis")
const gaming=(e)=>{
    console.log ("555")
    let pictoVisb=e.target.childNodes[0]
    console.log (e.target.childNodes)
    //.path.childNodes childNodes
    let m
if(pictoVisb.style.visibility==="hidden"){


 m= pictoVisb.style.visibility="visible"
}
    
else{m=pictoVisb.style.visibility="hidden"}

return m
}
//let b=document.querySelector(".imgdis")
let gr=document.querySelector(".grid-container")
//let h=document.querySelector("#d2")

gr.addEventListener("click", gaming);