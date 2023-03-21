function premier(a) {
   
    if(isNaN(a) || a < 0 || a > 30 ){
        return -1;
    }
    else{
        for (let i = 2; i < a; i++) {
            if(i % a == 0){
                return false;
            }
            else{
                return true;
            }
        }
    }   
}
let val = premier(31);
console.log(val);