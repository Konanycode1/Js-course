window.document.addEventListener("DOMContentLoaded", ()=>{
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let des = document.getElementById("desc");
    const btn = document.getElementById("btn");
    
    nom.addEventListener("input", (e)=>{
       if(e.target.value.length  > 5 || e.target.value.includes(" ")){
        e.target.classList.toggle('change')
       }

    })
    prenom.addEventListener("input", ()=>{

    });

    des.addEventListener("input", (e)=>{
        if(e.target.value.trim().length > 150){
            e.target.value = e.target.value.slice(0,149);
        }

    })




  

    
  

    // btn.addEventListener("click", (e)=>{
        
    // })
})