function slice(chaine, ind1, ind2) {
  let prent = "";
  let i = 0;
 
    if (ind2 > chaine.length) {
      ind2 = chaine.length - 1;
      for (i = ind1; i <= ind2; i++) {
        prent += chaine[i];
      }
    } else {
      if (ind2 < 0 ) {
        // console.log("ind2 < 0")
        ind2 = chaine.length + ind2;

        for (i = ind1; i < ind2; i++) {
          prent += chaine[i];
        }
      }
      else if (ind1 < 0) {
        ind1 = chaine.length + ind1;
        if (ind1 < - chaine.length ) {
          ind1 = 0
          for (i = ind1; i < ind2; i++) {
            console.log(i)
            prent += chaine[i];
          }
        }
        
      }
      else if (ind1 < 0 && ind2 < 0) {
        // console.log("ind2 < 0 et ind1<0");
        ind1 = chaine.length + ind1;
        ind2 = chaine.length + ind2;
        for (i = ind1; i < ind2; i++) {
          prent += chaine[i];
        }
      }
      else {
        for (i = ind1; i < ind2; i++) {
          prent += chaine[i];
        }
      }
    }
  console.log("Mon retour: ", prent);
}
slice("bonjours ok",-15, -5);
let lettre = "bonjours ok";
console.log("slice:", lettre.slice(-15, -5));
