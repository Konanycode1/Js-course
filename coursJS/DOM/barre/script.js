let barre = document.querySelector(".barre");
let btn = document.querySelector(".btn");
let semiBarre = document.querySelector(".semiBarre");
let larg = 500;
let seconde = 40;


window.document.addEventListener("DOMContentLoaded", ()=>{ 
    barre.style.width = `${larg}px`
    let decomp  = 0;
    let secondAnimate = 5;
    let larChild = larg/secondAnimate
    semiBarre.style.width = `0px` ;
    btn.addEventListener("click", ()=>{
        let setInter = setInterval(function (){
       
            decomp ++;
            if (decomp >5) {
                clearInterval(setInter) 
                 
            }
            else{
                console.log("ok")
                semiBarre.style.width =`${decomp*larChild}px`  
            }
        },5000/seconde)
    
    })

   
})