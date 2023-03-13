let clic = document.querySelector(".btn_click");
let input = document.querySelector('.myIp');
let forms = document.getElementById('myform')

let btnsu  = document.querySelector(".btnsu");

btnsu.addEventListener("mouseover", ()=>{
    input.value = "Je suis nanien"
})
input.addEventListener('change', ()=>{
    let create = document.createElement('p');
    create.innerHTML =  reverse(input.value)
    document.body.appendChild(create)
})

function reverse(chaine) {
    let recup = ""
    for(let i= chaine.length - 1 ; i > -1; i--){
        recup += chaine[i]
    }
    return recup
}
reverse("bonjours")

// function remplacerLesLettres(str){
//     str = str.replaceAll('e', '3').replaceAll('i', '1').replaceAll('o', '0');
//     return str
// }
// console.log(remplacerLesLettres("Bonjour les amis"))