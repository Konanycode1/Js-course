let clic = document.querySelector(".btn_click");
let input = document.querySelector('.myIp');
let forms = document.getElementById('myform')

// input.addEventListener("focus", ()=>{
//     console.log("i'm input ");
// })
// input.addEventListener("blur", ()=>{
//     console.log("je suis plus ");
// })
// input.addEventListener("input", ()=>{
//     console.log("holl!!!");
// })
// input.addEventListener("keyup", ()=>{
//     console.log("a voir");
// })
// input.addEventListener("keydown", ()=>{
//     console.log("my down");
// })
// input.addEventListener("keypress", ()=>{
//     console.log("my press");
// })
// clic.addEventListener('mouseover', ()=>{
//     alert("hello bro")
// })

forms.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    console.log("ok")
})