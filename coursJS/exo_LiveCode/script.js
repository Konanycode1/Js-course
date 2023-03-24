function premier(a) {
   
    if(isNaN(a) || a < 0 || a > 30 ){
        return -1;
    }
    else{
        for (let i = 2; i < a; i++) {
            if(i % a == 0){
                return true;
            }
            else{
                return false;
            }
        }
    }   
}
let val = premier(7);
console.log(val);

function nbrPremier(nbr) {
    for(var i = 2; i < nbr; i++)
      if(nbr%i === 0) return false;
    return nbr > 1;
  }
  
  console.log(nbrPremier(7));


  

  a = "aller9ty6";
  let rege = new RegExp(/[0-9]/g)
a = a.match(rege);

let som = a.reduce ((a,b)=> parseInt(a) + parseInt(b))
console.log(som)


  
// let tab = [1,2,3,4,5];

// let add = tab.reduce((a,b)=>{
//     return Math.max(a * b) 
// });
// console.log(add)

// let car = "aabaa";

// car = car.split('').reverse().join('');
// console.log(car)

// function solution(tab){
//    for(let i = 0; i < tab.length; i++){
//         return tab[i] 
//    }
    
// }
// console.log(solution([3,6,-2,-5,7,3]))

// let ob = {
//     a: 2, b: 3, c: 4
// }
// let tab =[1,3,4,5]
// delete tab[1];
// console.log(tab)
// console.log(tab.length);
// delete ob.c;
// console.log(ob);

// console.log("bonjour".indexOf("b"))

// var tab = [1, 2, 3, 'w', 3, 'w'];

// let newTab = [...new Set(tab)]; 

// console.log(newTab);

// function trie(value, index,self ) {
//     return self.indexOf(value) === index
    
// }

// let newTable = tab.filter(trie);
// console.log(newTable);

// let nbr = [1,2,3,4,5]
// let len = nbr.length;
// console.log(len)
// let mul = nbr.reduce((a,b) => (a*b)) * len
// console.log(mul)


// var systems = [1,9,8,0,6,3];

// console.log (systems.sort((a,b) => a-b ));   



// let sys = ["Windows", "Linux", "Apple"];
// let val = sys.every(ele => ele.length >=5)
// console.log(val);   //sortie: ["Apple", "Linux", "Windows"]


// let ta = "bonjours abraham"

// let reg = new RegExp(/[aiou]/g);
// console.log(ta.match(reg).length);

// let chif = 342;
// chif = chif.toString().split('').reduce((a,b)=> parseInt(a)+ parseInt(b)) 
// console.log(chif)

// let myTab = [2,5,7,9,0]

// let index = -1
// myTab = myTab.filter(ele => myTab.indexOf(ele) != index)
// console.log(myTab);
