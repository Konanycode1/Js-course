let icoClick = document.querySelectorAll('.fa-assistive-listening-systems');
let data = [];
function setItem(cle, valeur) {

    localStorage.setItem(cle, valeur);   
}
function getItem(cle) {
    localStorage.getItem(cle);    
}
icoClick.forEach((clic)=>clic.addEventListener("click", (e)=>{
    data.push(clic);
    setItem('valeur',JSON.stringify(data));
}))
valeur = localStorage.getItem('valeur');
valeur  = JSON.parse(valeur)
nombreAjou = valeur?.length;
console.log('hjvhbhjb', nombreAjou)



