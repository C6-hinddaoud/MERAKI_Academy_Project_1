const myImg = [{ src: "./images/mem2.png", id: 2 }, { src: "./images/mem1.png", id: 1 }, { src: "./images/mem3.png", id: 3 }, { src: "./images/mem1.png", id: 1 }, { src: "./images/mem3.png", id: 3 }, { src: "./images/mem2.png", id: 2 }]
const body = document.querySelector("body");
const divm = document.querySelector(".maindav");
let inputR = document.createElement("input");
//divm.append(inputR)
//load picture
let lable = document.querySelector("#result");
let myrandom;
// myrandom= Math.ceil( (Math.random(myImg.length)*5))


//
let randomArray = []
const T = randomFunction = () => {
    //debugger
    myrandom = Math.ceil((Math.random(myImg.length) * 3))
    for (i = myrandom; i < myImg.length; i++) {
        randomArray.push(myImg[i])
      
    }

    let valr = (myImg.length) - myrandom
    let newVal = (myImg.length) - valr
    for (i = 0; i < newVal; i++) {
        randomArray.push(myImg[i])
        
    }
    return randomArray
}

//    return Math.ceil( (Math.random(myImg.length)*5))

// })



//#tryAgin

const comper = (e) => {
    debugger;
    if (arrComper[0] === arrComper[1]) {
        e.target = "hidden"
    }
}
let taretArray = []
let scorWin = 0
let score = 0;
let arrvisable = []
let arrComper = [];

let depth = 0;
const gaming = (e) => {
    //debugger;
    
    let pictoVisb = e.target.childNodes[0]
    let picPath = e.target.img
   
    // console.log ("mypath" +e.path[0])
    //not
    let vis = e.path[0]
    //.path.childNodes childNodes
    let m
    if (vis.style.visibility === "") {

        arrvisable.push(vis.childNodes[0])
        arrComper.push(e.target.childNodes[0])
        m = pictoVisb.style.visibility = "visible"
    }

    else {
        m = e.target.style.visibility = "hidden"
        arrvisable.push(e.target.childNodes[0])

    }

    depth = depth + 1
    taretArray.push(e.target)
    //
    if (depth === 2) {

   

        if (arrComper[0].id === arrComper[1].id) {

            scorWin = scorWin + 1
           // score = score + 1
    
             console.log(score)

            //arrvisable[0].remove()
            //arrvisable[1].remove()
            // arrComper[0].removeEventListener("click", gaming);

            arrvisable[0].style.visibility = "visible"
            console.log(taretArray)

            taretArray[0].removeEventListener("click", gaming);

            arrvisable[1].style.visibility = "visible"

            // arrComper[1].removeEventListener("click", gaming);

            taretArray[1].removeEventListener("click", gaming);
            console.log("ibrahim")
            arrvisable = []
            arrComper = []
            taretArray = []
            depth = 0

            if (scorWin === 3) {
                // body.style.background("red")
                let lable = document.querySelector("#result");
                let theEnd = document.querySelector(".grid-container ")
                theEnd.style.display = "none";
                lable.innerText = "you win"
            }


        } else {
        


            setTimeout(() => {
           

                arrvisable[0].style.visibility = "hidden",
                    arrvisable[1].style.visibility = "hidden";
                arrvisable = []
            }, 500);

            //  setTimeout(
            //     arrvisable[0].style.visibility="visible",
            //     arrvisable[1].style.visibility="visible"
            // ,1000); //delay is in milliseconds


            arrComper = []
            score = score + 1
            console.log( "score"+ score)
            if (score === 6) {
                //score=0
                let lable = document.querySelector("#result");
                let theEnd = document.querySelector(".grid-container ")
                theEnd.style.display = "none";
                lable.innerText = "you lose"
               
            }
            depth = 0
        }




        taretArray = []


    }

}
//let img;
//let Newdiv=document.createElement("div")





const loadPic = () => {
    //let gr=document.querySelectorAll(".grid-item")
    let contDiv = document.createElement("div")
    randomFunction();
    for (i = 0; i < randomArray.length; i++) {


        let img = document.createElement("img")
        img.src = randomArray[i].src
        img.id = randomArray[i].id
        img.className = "imgdis"
        //img.addEventListener("click",gaming)

        //gr.addEventListener("click",gaming);
        //img.addEventListener("click",comper)
        img.style.visibility = "hidden"
        //let contDiv=document.createElement("div")
        contDiv.className = "grid-container"
        let Newdiv = document.createElement("div")
        //let divC = document.querySelector(".grid-item"+1)
        Newdiv.className = "grid-item" + 1
        Newdiv.className = "grid-item"
        //body.append(divm)
        body.append(contDiv)
        contDiv.append(Newdiv)

        //body.append(divC)
        //divC.id=i
        //divC.append(img)
        Newdiv.id = "d" + i
        Newdiv.append(img)
        //b.addEventListener("click", gaming);

    }
    randomArray = []
}



body.onload = loadPic()




let b = document.querySelectorAll(".imgdis")
// const gaming=(e)=>{
//     console.log ("555")
//     let pictoVisb=e.target.childNodes[0]
//     console.log (e.target.childNodes)
//     //.path.childNodes childNodes
//     let m
// if(pictoVisb.style.visibility==="hidden"){


//  m= pictoVisb.style.visibility="visible"
// }

// else{m=pictoVisb.style.visibility="hidden"}

// return m
// }
//let b=document.querySelector(".imgdis")

//let h=document.querySelector("#d2")


const gr = document.querySelectorAll(".grid-item")
gr.forEach((gr) => {
    gr.addEventListener("click", gaming);
});

//b.addEventListener("click", gaming);
const mynew = document.querySelector("#tryAgin");
if (mynew) {
    //mynew.addEventListener("click",()=>{
    // "window.location.reload()"

    //})
}