let input = document.getElementById('inp');
let content = document.querySelector('.content');

input.addEventListener('keyup',(e)=> {
    let code = e.keyCode;
    if(code ===13){
        
        let value = e.target.value;
        value =value.split('>');
        console.log(value)
      
        switch (value[0]) {
            case "A":
                let element = document.createElement(value[1]);
                element.textContent = value[2];
                console.log("ok");
                let styl = JSON.parse(value[3])
                for (const key in styl) {
                    console.log(key);
                  element.style[key] = styl[key]
                  
                }
                console.log(element)
                break;
            case "U":
                
            default:
                break;
        }
    }

})

// A>div>bonjour>{"width":"200px","height":"200px", "backgroundColor": "red"}