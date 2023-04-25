
function alphabet(nombre) {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let pair = [2,4,6,8,10,12,14,16,18,20,22,24,26]
    let impair = [1,3,5,7,9,11,13,15,17,19,21,23,25];
    let outPut =[]

    if( nombre % 2 === 0){
        const isOnPair = pair.find((item) => item  ==  nombre);
        let partiMiniP = isOnPair? pair.filter((ele) => ele < isOnPair): pair;

        for (let i = 0; i < partiMiniP.length; i++) {
            let first = partiMiniP[i]
            for(let j = 0; partiMiniP.length; j++){
                let second = partiMiniP[j];
                if(first*second == nombre){
                    
                }
            }  
        }  
    } 
}
