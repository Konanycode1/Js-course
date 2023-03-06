let zone = document.querySelector(".zone");
let add = document.getElementById('btn');

let tab = [1,2,3,4,5,6];
let des = tab[Math.floor(Math.random() * tab.length)];
let ludo = document.querySelectorAll(".ludo");
let de = document.createElement('div')
de.className = "ludo";

function createDiv() {
    add.addEventListener('click', ()=>{
        zone.appendChild(de)
        ludo.forEach(element => {
            let cercle = document.createElement('div')
            cercle.className = "cercle";
            element.appendChild(cercle);
        });
        


        // switch (des) {
            //     case 1:
            //             clic.appendChild(cercle);
                    
            //         break;
            //     case 2:
            //             clic.appendChild(cercle);
            //             clic.appendChild(cercle);
                    
            //         break;
            //     case 3:
            //             clic.appendChild(cercle);
            //             clic.appendChild(cercle);
            //             clic.appendChild(cercle);
                    
            //         break;
            //     case 4:
            //             clic.appendChild(cercle);
            //             clic.appendChild(cercle);
            //             clic.appendChild(cercle);
            //             clic.appendChild(cercle);
            //         break;
            //     case 5:
            //             clic.appendChild(cercle);
            //             clic.appendChild(cercle);
            //             clic.appendChild(cercle);
            //             clic.appendChild(cercle);
            //             clic.appendChild(cercle);
                    
            //         break;
            //     case 6:
            //             clic.appendChild(cercle);
            //             clic.appendChild(cercle);
            //             clic.appendChild(cercle);
            //             clic.appendChild(cercle);
            //             clic.appendChild(cercle);
            //             clic.appendChild(cercle);
                    
            //         break;
            //     default:
            //         break;
            // }
       
        // console.log(ludo)
        
        
    })   
}
createDiv();


