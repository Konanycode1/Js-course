function substr(chaine, ind1,ind2) {
    let prent = "";
    let i = 0
    if (ind2 > chaine.length){
        ind2 = chaine.length-1
          for ( i = ind1; i < ind2+1; i++) {
                prent += chaine[i];  
        }
    }
    else{
        if (ind1== 0 && ind2 ==1 ) {
            ind2 = 0;
        }
         for ( i = ind1; i <= ind2+1; i++) {
            console.log(i);          
            prent += chaine[i];  
        }
    }
    console.log("retour: ",prent);
}
substr("bonjours ok", 3 ,4);
let lettre = "bonjours ok"
console.log("substr:",lettre.substr(3,4));