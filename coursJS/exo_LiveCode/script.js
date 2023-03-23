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

let tab = [1,2,3,4,5];

let add = tab.reduce((a,b)=>{
    return Math.max(a * b) 
});
console.log(add)

let car = "aabaa";

car = car.split('').reverse().join('');
console.log(car)

function solution(tab){
   for(let i = 0; i < tab.length; i++){
        return tab[i] 
   }
    
}
console.log(solution([3,6,-2,-5,7,3]))