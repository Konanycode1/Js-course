function mySlice(chaine, i1,i2) {
    let output = "";
    i1 = i1 < - (chaine.length) ? 0 : i1 > chaine.length ? chaine.length : i1;
    i2 = i2 < - (chaine.length) ? 0 : i2 > chaine.length ? chaine.length : i2;

   if(i1 > i2){
    return output;
   }
   

}