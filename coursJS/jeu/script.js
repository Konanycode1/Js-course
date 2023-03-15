let input = document.getElementById('inp');
let content = document.querySelector('.content');

input.addEventListener('keyup',(e)=> {
    let code = e.keyCode;
    if(code ===13){
        
        let value = e.target.value;
        value =value.split('>');
      
        switch (value[0]) {
            case "A":
                let element = document.createElement(value[1]);
                element.textContent = value[2];
                element.className = "ajout"
                let styl = JSON.parse(value[3])
                for (const key in styl) {
                  element.style[key] = styl[key];
                }
                content.appendChild(element)
                break;
            case "U":
                let val = content.firstElementChild;
                val = "ok"? val == null : val.remove(); 
                let update = document.createElement(value[1]);
                    update.textContent = value[2];
                    let updateSt = JSON.parse(value[3]);
                    for (const key in updateSt) {
                        update.style[key] = updateSt[key]
                    }
                content.appendChild(update)
            case "D":
                const first =  content.firstElementChild
                first.remove() 
            default:
                break;
        }
    }

})

// A>div>bonjour>{"width":"200px","height":"200px", "backgroundColor": "red"}
// U>div>bonsoir>{"width":"200px","height":"200px", "backgroundColor": "blue"}