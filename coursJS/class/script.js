// class Humain {
//     constructor (nom, prenom, age ){
//         this.nom = nom;
//         this.prenom = prenom;
//         this.age = age;
//     }

//     getPoids(){
//         this.poids = 140 
//     }
//     getTailles(){
//         this.taille = 1,45
//     }
// }

// let person =  new Humain(200, 1,75);
//  console.log(person.getTailles)

//  let promise = new Promise((resolve, reject) =>{
//     resolve("hello my letter is back");
//  })
//  .then(value =>{
//     console.log(value)
//  })

//  console.log(promise)


// const foo = ()=>5;
// const foo = ()=>{return 5}
// console.log(foo())

// let x = 2;
// const add1 = y => x += y;
// console.log(x);
// add1(5)
// console.log(x)

// const add2 = (a,b) => a + b;
// console.log(add2(2,5))

// function forEchaFoun(tab, callback) {
//     for (let i = 0; i < tab.length; i++) {
//         callback(tab[i]);  
//     } 
// }

// let data = [1,2,3,4,5,6,7]
// forEchaFoun(data, (item)=>{
//     console.log(item)
// })



// function FuncFilter(tab, funct) {
//     const filtered = [];
    
//      for (let i = 0; i < tab.length; i++) {     
//         if(funct(tab[i])){
//             filtered.push(tab[i])
//         }
//      }
//     return filtered; 
// }
// const filtre = FuncFilter(data, el =>el > 2);
// console.log(filtre)


// (function () {
//     console.log("ok")
    
// })();

// la recursion


// const multi = (a,b) => a*b;
// console.log(multi(5,2))
// let data = [1,2,3,4,5,6,7]
// function Callfunc(mytab, callback){
//     let recup = [];
//     for (let i = 0; i < mytab.length; i++) {
//         if(callback(mytab[i])) {
//             recup.push(mytab[i]+1);
//         } 
//     }
//     return recup;
// }
// let ajout = Callfunc(data, el => el );
// console.log(ajout)


// function retour(tab, func) {
//     const newTab = [];
//     for(let i = 0; i < tab.length; i++){
//         newTab.push(func(tab[i]));
//     }
//     return newTab;
// }
// const plusUn = nb => nb+1;
// console.log(retour(data, plusUn))

// console.log(Math.ceil((Math.random()* (1000 -200) + 200 )))

// let myPhrase = "Bonjours, je suis nanien de la promotion 6.23 et toi ";
//  const regex = new RegExp(/[A-Z]/g)
//  console.log(myPhrase.match(regex));

// let email = "contact@johndoe.fr";
// const regexp = new RegExp(/johndoe.[a-z]{2,3}/g)
// console.log(email.match(regexp));

// let verif = "+225 0708889205";
// const reg = new RegExp('#(0|+225)[1-9]( *[0-9]{2}){4}#')
// console.log(verif.match(reg))

// let obj1 = { str: "ZZZZ"};
// let obj2 = obj1
// obj1.str = "bbbb"
// console.log(obj1, obj2)

// let a = "ZZZZ"
// let b = a;

// a = "vuubu"
// console.log(a, b)

// const kitty = {
//     race: "Siamois",
//     poids: 3,
//     couleur: "gris",
//     myObj : {
//         a: 2,
//         b: 4
//     }
// }
// console.log(kitty.myObj);

// const tableau = ['a','b','c','d'];
// console.log( tableau.length);

// const voiture =  {
//     couleur: 'noire',
//     marque: 'peugeot',
//     annee: 2007,
//     myFunction: function () {
//         console.log(this)
//     }
// }
// let nvFunction = voiture.myFunction.bind(voiture);
// nvFunction() 


// ------------les objet en long et en large-------

// const primitif = 'un';
// const stringObj = new String('un');

// if(primitif === stringObj)
//     console.log("===");
// if(primitif == stringObj)
//     console.log("==")

// const prim = '2 * 6';
// const obj = new String('2 * 6')
// console.log(eval(prim))
// console.log(eval(obj))
// ---------------------
// const mini = {
//     model: 'mini',
//     make: 'bmw',
//     hp: 120,
//     color: 'blue',
//     tires: '17"'
// };
//----------- propriété
/*Object.defineProperties(mini, {
    model:{
        enumerable: false
    },
    hp:{
        writable: false
    }
})


for(let prop in mini)
    console.log(prop);

mini.hp = 200;
console.log(mini.hp)
*/
//----------- propriété

//-------getters et setters

const miniSG = {
    model: 'mini',
    make: 'bmw',
    hp: 120,
    color: 'blue',
    tires: '17"',


    get Color() {
        return `${this.model} 's color is ${this.color}`
    },
   
    /**
     * @param {any} newColor
     */
    set paint(newColor) {
        this.color = newColor

    }
};

miniSG.paint = 'red'
// console.log(miniSG.Color)


// ------exemple----
// let nom = "abraham";
// let prenom = "konany";
// let age = 22
// const User = {
//     name : nom,
//     lastname: prenom,
//     old: age,

//     get addPerso () {
//         return `Mon nom est ${this.name} ${this.lastname} et j'ai ${this.old} ans`
//     },
    /**
     * @param {string} repName
     */
    // set UpdatePerso(repName){
    //     this.name = repName;

    // }

// }
// User.UpdatePerso = "KOne"
// console.log(User.addPerso)

//----------------prototypes

// const o = {a:'b', b:'c'};
// o.__proto__ = {d:'e'};

// console.log(o.d);
// console.log(o.hasOwnProperty('a'));
// console.log(o.hasOwnProperty('d'));
// console.log(o)



// const xhr = new XMLHttpRequest();
// xhr.open("Get", "https://jsonplaceholder.typicode.com/posts");
// xhr.responseType = "json"
// xhr.onload = function () {
//     console.log(xhr.response)
    
// }

// xhr.send();

let data = new Request("https://jsonplaceholder.typicode.com/posts");

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET", //ou POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "text/plain;charset=UTF-8" //pour un corps de type chaine
    }})
.then(response => response.json)
.then(response => {
    console.log(response)
})


