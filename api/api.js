
// let values = fetch("http://localhost:3000/api/stuff")
//     .then(response => response.json())
//     .then(data =>{
//         console.log(data)
//     })

   async function api() {
        let data = await fetch("http://localhost:3000/api/stuff");
        let val = await data.json();

        console.log(val)
    }
    api()