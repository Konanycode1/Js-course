const NanAction = {
    login : "konany",
    username: "abraham",
    matricule: "KA2023",
    access: {
        challenge: false,
        battle: false,
        livecoding: false
    },
    resultat:[
        {
            name: "konany",
            links: ["konany.com", "abraham.com"],
            points: 13

        }
    ],
    points : 13
    
}

Object.defineProperties(NanAction,{
    access: {
        enumerable: false
    },
    matricule: {
        writable: false

        
    },
    points: {
        writable: false

    }
})
console.log(NanAction)



const Maths = {
    max: function (nbr) {
            if(Array.isArray(nbr)){
                let first = nbr[0];
                for (let i = 0; i < nbr.length; i++){
                    if( first < nbr[i]){
                        first = nbr[i]
                    }
                }
                return first
            }
    },
    min: function (nbr) {
        if(Array.isArray(nbr)){
            let first = nbr[0];
            for (let i = 0; i < nbr.length; i++){
                if( first > nbr[i]){
                    first = nbr[i]
                }
            }
            return first
        }
},

    pow: function (a, b) {
        if(!isNaN(a) && !isNaN(b)){
            let pou = 1;
            for (let i = 0; i < b; i++) {
                pou *= a;
            }
            return pou

        }
    },
    sqrt: function (x) {
        return x**(0.5);
    },
    abs: function (x) {
        return x<0?x*(-1):x
    }

}
let maxx = Maths.max([2,3,7,20,1,0]);
let minn = Maths.min([2,3,7,20,1,0]);
let pows = Maths.pow(9,2)
let sqrt =Maths.sqrt(25);
let abs = Maths.abs(-6)
// console.log(pows)
// console.log(maxx);
// console.log(minn);
// console.log(sqrt)
console.log(abs)