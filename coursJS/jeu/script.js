let input = document.getElementById('inp');
let content = document.querySelector('.content');

input.addEventListener('keyup',(e)=> {
    let code = e.keyCode;
    if(code ===13){
        
        let value = e.target.value;
        value =value.split('>');
        let element;
        switch (value[0]) {
           
            case "A":
                
                if(content.querySelector(value[1])){
                    alert(`l'element existe déjà`)
                }
                else
                {
                    element = document.createElement(value[1]);
                    element.textContent = value[2];
                    element.className = "ajout"
                    let styl = JSON.parse(value[3])
                    for (const key in styl) {
                    element.style[key] = styl[key];
                    }
                    content.appendChild(element);
                }
                 
                
                break;
            case "U":
                
                if(content.querySelector(value[1])){
                    element = content.querySelector(value[1])
                    element.textContent = value[2];
                    let updateSt = JSON.parse(value[3]);
                    for (const key in updateSt) {
                        element.style[key] = updateSt[key]
                    }
                    
                }
                else{
                    alert("Ajouter un element")
                }
                break
            case "D":
                const first =  content.querySelector(value[1])
                content.removeChild(first);
            default:
                break;
        }
    }

})

// A>div>bonjour>{"width":"200px","height":"200px", "backgroundColor": "red"}
// U>div>bonsoir>{"width":"200px","height":"200px", "backgroundColor": "blue"}