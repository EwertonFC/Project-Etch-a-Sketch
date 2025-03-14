let container = document.querySelector("#container")
let quadradinhos = 10
let tamanhoQuadradinhos = 400 / quadradinhos 

for (let i = 0; i < quadradinhos**2; i++){
    let grid = document.createElement("div")
    grid.style.width = `${tamanhoQuadradinhos-2}px` 
    grid.style.height = `${tamanhoQuadradinhos-2}px`
    container.appendChild(grid)
    grid.setAttribute("class", "grid")
}

let cadaquadrado = document.querySelectorAll(".grid")
cadaquadrado.forEach(element => {
    element.addEventListener("mouseenter", ()=> {
        element.style.backgroundColor = "black"
    })
});




















