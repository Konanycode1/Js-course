function substr(chaine, ind1, ind2) {
  let bloc = "";
 
  // ind1 = ind1 < 0 ?  
  ind1 = ind1 < 0 ? chaine.length + ind1 : ind1;
  ind2 = ind2 > chaine.length ? chaine.length : (ind2 < 0 ? "" : ind2  )
  let som = ind1 + ind2;
  som = som > chaine.length? som = chaine.length : som;
  for (let i = ind1; i < som; i++) {
    bloc += chaine[i];
  }
  return bloc;
}
let text = "bonjours ok";
console.log("phrase: ", text);
console.log("substr elle meme:", text.substr(1, 3));
console.log("substr function for me :", substr("bonjours ok", 1, 3));
