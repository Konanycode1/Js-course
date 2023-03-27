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