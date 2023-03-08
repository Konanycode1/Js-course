function substr(chaine, ind1, ind2) {
  let bloc = "";
  let som = ind1 + ind2;
  // ind1 = ind1 < 0 ?  

  if (ind1 < 0) {
    ind1 = chaine.length + ind1;
    console.log(ind1);
    for (let i = ind1; i < som; i++) {
      bloc += chaine[i];
    }
  } else if (ind2 < 0) {
    bloc = "";
  } else if (ind1 < 0 && ind2 < 0) {
    ind1 = chaine.length + ind1;
    ind2 = chaine.length + ind2;
    som = ind1 + ind2;
    if (som > chaine.length) {
      som = chaine.length;
      for (let i = ind1; i < som; i++) {
        bloc += chaine[i];
      }
    } else {
      for (let i = ind1; i < som; i++) {
        bloc += chaine[i];
      }
    }
  }

  return bloc;
}
let text = "bonjours ok";
console.log("phrase: ", text);
console.log("substr elle meme:", text.substr(8, 10));
console.log("substr function for me :", substr("bonjours ok", 8, 10));
