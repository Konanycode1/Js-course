var facto = document.getElementById('facto');
var ajout = document.getElementById('ajout')

function factorielle (valeur) {
    if(valeur <= 0){
        return 1
    }
    else if (valeur > 0){
        let result = valeur * factorielle(valeur - 1);
        return result ;     
    }
    else{
        return ''
    }
}
facto.addEventListener('input', function (event) {
    let val = parseInt(event.target.value);
    ajout.value = factorielle(val);   
})