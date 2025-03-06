let container = document.querySelector("#container")
// let grid = document.createElement("div")

let quadradinhos = document.querySelector("grid")
quadradinhos = 10

function row(){
    let tamanhoQuadradinhos = 400 / quadradinhos 

    for (let i = 0; i < quadradinhos**2; i++){
        let grid = document.createElement("div")
        grid.style.width = `${tamanhoQuadradinhos-2}px` 
        grid.style.height = `${tamanhoQuadradinhos-2}px`
        container.appendChild(grid)
        grid.setAttribute("id", "grid")
    }
}


row();





