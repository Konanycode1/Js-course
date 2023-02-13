let para = document.getElementById('para');
var tab = [1,2,3,4,5,6];
let compteur = 0;
let timeCompte = 80;
para.style.fontSize = '10rem'
para.style.fontWeight = 'bold'
let inter = null;
let compte = 1;

function decompte(time) {
    clearInterval(inter);
   inter =  setInterval(function () {
        para.textContent = tab[compteur]
        compteur = compteur +  1
        if(compteur === 6){
            compteur = 0
        }
    },time  );
}
decompte(80); 
while (timeCompte < 200) {
    setTimeout(() => {
        decompte(timeCompte); 
    }, compte * 2000);
    compte += 1;
    timeCompte += 20;
} 
// if (timeCompte === 200) {
//     clearInterval(inter);
// }
// clearInterval(inter);

