let ph = "bonjour bro comment vas-tu"
splite("bonjour bro comment vas-tu"," ");
console.log(ph.split(""));
function splite(chaine, separa) {
    let recup = "";
    let tab = [];
    let index = chaine.indexOf(separa);
    for(let arg of chaine){
        if(arg !== separa){
            recup += arg;
        }
        else {
            tab.push(recup);
            recup = "";
             
        }
        
    }
    tab.push(recup);
    // if(recup === ''){
    //     tab.shift();
    // }
    console.log(tab)
}
// let lettr = "bonjour";
// console.log(lettr.length)
// console.log(lettr.substr(1,2))