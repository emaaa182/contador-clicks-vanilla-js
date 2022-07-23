let btnClick = document.getElementById("btnClick")
let conClick = document.getElementById("contarClick")
let btnReset = document.querySelector(".btnReset")
let contar = 
conClick.textContent = 0
 btnClick.addEventListener("click",()=>{
    contar++
    conClick.innerHTML = contar
 })

 btnReset.addEventListener("click",()=>{
    conClick.innerHTML = 0
    contar = 0
 })

 
 const producto = comidas.find(comidas =>comidas.id)
