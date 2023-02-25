let quest = confirm("Avez-vous plus de 18 ans");

if(quest == true){
    let nbr = prompt("entrer un nombre compris de 1 à 10 ");

    if(nbr >=1 && nbr <= 10){

        if(parseInt(nbr) % 2 === 0){
            let verif = prompt("entrer un nombre compris entre 1 et le nombre que vous avez entrez");
            // if(verif >=1 && verif )

        }
        else{
            alert("Dommage cupidon")
        }
    }
    else{
        alert("nombre non autorisé cupidon")
    }

   
    
}
else{
    alert("vous n'etes pas autorisé");
}


