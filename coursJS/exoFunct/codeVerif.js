function nbrPremier(nbr) {
  if (isNaN(nbr) || nbr < 0 || nbr > 29){
        return -1
      }
      else{
        for(var i = 2; i < nbr; i++){
            if(nbr%i === 0){
                return true
            }
            return false;
        }
      }
      } 
  console.log(nbrPremier(37));

  function multip(nbr) {
    let recup = "";
    for(let i =1; i< 10; i++){
        recup += i*nbr
    }
    return recup
  }
  console.log(multip(2))