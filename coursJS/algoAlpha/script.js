
// function alphabet(nombre) {
    
//     let pair = [2,4,6,8,10,12,14,16,18,20,22,24,26]
//     let impair = [1,3,5,7,9,11,13,15,17,19,21,23,25];
//     let outPut =[]

//     if( nombre % 2 === 0){
//         const isOnPair = pair.find((item) => item  ==  nombre);
//         let partiMiniP = isOnPair? pair.filter((ele) => ele <= isOnPair): pair;

//         for (let i = 0; i < partiMiniP.length; i++) {
//             let first = partiMiniP[i]
//             for(let j = 0; partiMiniP.length; j++){
//                 let second = partiMiniP[j];
//                 if(first*second == nombre){
                    
//                 }
//             }  
//         }  
//     } 
// }

// function display(type, ...rest) {
//     let outPut = [];
//     const alpha = "abcdefghijklmnopqrstuvwxyz";
//     const[num1, num2,...hover]= rest
//     switch (type) {
//         case "add":
//             outPut = [alpha[num1-1] + alpha[num2-1],alpha[num2-1]+alpha[num1-1] ]
//             break;
//         case "multi":
//             let firstPart = "";
//             let secondePart = "";
//             for (let i = 0; i < num1; i++)
//                 firstPart += alpha[num2-1]
//             for(let i =0; i < num2; i++)
//                 secondePart += alpha[num1-1]

//             outPut = [alpha[num1-1] + alpha[num2-1],alpha[num2-1]+alpha[num1-1] ]
//             break;
        
//         default:
//             break;
//     }
    
// }

// function trie(tab){
//     let resu =[]
//     return tab.filter(ele => ele > 0 && ele % 3 == 0 );
// }
// console.log(trie([2,8,7,9,12,8,-12,23,97]))


// const multi = a => `${a*1},${a*2},${a*3},${a*4},${a*5},${a*6},...,${a*10}`;
// console.log(multi(2));


// function reverse(chaine) {
//     let recup = ""
//     const lettre = chaine.split(" ");
//     for (let i = 0; i < lettre.length; i++) {
//         recup += lettre[i].split("").reverse().join("");
//         if(i < lettre.length){
//             recup += " "
//         }  
//     }
//     return recup
    
// }

// console.log(reverse("abc"))

// function countVowels(chaine) {

//     let regex = new RegExp(/[aiueyo]/gi);
//     let val = chaine.match(regex)
//     return val.length   
// }

// console.log(countVowels('bonjour konany toi moi vous I' ));

// function count_number(nbr) {
//     if( isNaN(nbr)){
//         return -1
//     }
        
//     let conver = nbr.toString().split("");
//     let val = conver.reduce((a,b)=> +a+(+b))
//     return val
    
// }
// console.log(count_number(1425))

// function remove_duplicates(t) {
//     const tab =  [...new Set(t)]
//     return tab
    
// }
// console.log(remove_duplicates([1,2,2,3,5,5,9]))

// var tab = [1, 2, 3, 'w', 3, 'w'];

// let newTab = [...new Set(tab)]; 

// console.log(newTab);

// function hasDistinctElements(t) {
//     if(!Array.isArray(t)) return -1;
//         console.log(t.indexOf(8))
//        return tab = t.some((a,x)=> t.indexOf(a) === x)
// }
// console.log(hasDistinctElements([1,5,9,6,8]))

// function findLocalMax(tab) {
//    if(tab.length >= 3){
//     for (let i = 1; i < tab.length -1; i++) {
//         if(tab[i] > tab[i-1] && tab[i] > tab[i+1]){
//             return i;
//         }
        
//     }
//    }
// }
// console.log(findLocalMax([3,5,1,8,5]))

// function longestWord(ch) {
//     return Math.max(...ch.split(" ").map(item => item.length)) 
    
// }
// console.log(longestWord("bonjour kk dfg gfhjklmdgfhjklmù"))


// function trie(tab){
//     let mach = tab.filter(e => e.length <= 7)
    
//     const data = mach.map(para => {
//             let outPut = "";
//             for (let i = para.length-1; i >= 0; i--) {
//                 outPut += para[i] 
//             }
//             return outPut;
//     })
//     return data
// }
// console.log(trie(["enchante", "comment" ,"vous" ,"allez" ,3]));


// const  recupValDouble = (t1,t2) =>{
//     let data = t1.filter((ele,a) => t2.includes(ele) && t1.indexOf(ele) === a);
//     // return [...new Set(data)]
//     return data
// }
// console.log(recupValDouble([1,5,8,9,5,10],[2,5,8,10,6]))


function matrix(t){
    let val = []
    for (let i = 0; i < t.length; i++) {
        val.push(t[i].sort((a,b) => a-b))
    }
    return val.sort((a,b) => a.reduce((i,l)=>i + l) -b.reduce((i,l)=>i + l) );
    
}
console.log(matrix([[6,5,4],[3,2,1],[5,8,1]]))