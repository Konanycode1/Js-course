// function Mydata(a,b){
//     this.a = a;
//     this.b = b;


//     return {
//         add: ()=> a + b,
//         sous : ()=> a - b,
//         multi : ()=> a * b,
//         divise : () => a / b
//     }
// }
// console.log(Mydata(12,2).add())




// const multitab =[1,2,3,1,2,3,4];
// console.log(multitab.flat(3));

// console.log(multitab.join("----"))
// console.log(multitab.reverse())
// console.log(Math.max(...multitab))
// console.log(Math.min(...multitab))

class People {
    constructor(props){
        this.name = props.name;
        this.lastName = props.lastName;
    }
    display(){
        return this.name
    }
    setName(nom){
        this.name = nom
    }
    setPerson(data){
        this.name = data.name;
        this.lastName = data.lastName;
    }

}

let data = {name: 'abraham', lastName: "konany"}
let obj = {name : "kone", lastName:"mamadou"}
let person = new People(data);

let updatePer = person.setPerson(obj)
person.setName("bamba")
console.log(person.display())

