function mySlice(chaine, i1,i2) {
    // la valeur qui contenue ma chaine
    let output = "";
    let tabout = [];
   

    
    //maintenir les nombre - la longueeur de la chaine et + la longueur de la chaines
    i1 = i1 < - (chaine.length) ? 0 : (i1 > chaine.length ? chaine.length : i1);
    i2 = i2 < - (chaine.length) ? 0 : (i2 > chaine.length ? chaine.length : i2);
    i1  =   i1 < 0 ? (chaine.length + i1) : i1;
    i2  =   i2 < 0 ? (chaine.length + i2) : i2;


   
   if(i1 > i2){
    return output; 
   }
   else{
    for (let i = i1; i < i2; i++) {
        if (typeof chaine === "object") {
            output = []
            output.push(chaine[i]);
        }
        else{
            output += chaine[i];
        }  
    }
   }
   console.log("slice = ",chaine.slice(i1,i2))
    return output;  
}
console.log(`my slice : ${mySlice(["boujours OK !!","ok", "ok"], 2,5)}`)
