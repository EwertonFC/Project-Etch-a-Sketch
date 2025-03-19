let container = document.querySelector("#container")

function quantidadeQuadrados(padrao = 16) {
    let botaoConfigurar = document.querySelector("#configure")
    botaoConfigurar.addEventListener("click", () => {
        let quantidade = prompt("Digita ai")
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        configurarTela(quantidade)
    })
    return padrao
}

function configurarTela(quantidadeQuadrados) {
    for (let i = 0; i < quantidadeQuadrados ** 2; i++) {
        let grid = document.createElement("div")
        grid.style.width = `${500 / quantidadeQuadrados - 2}px`
        grid.style.height = `${500 / quantidadeQuadrados - 2}px`
        container.appendChild(grid)
        grid.setAttribute("class", "grid")
    }
    pintarQuadrados()
    limparQuadrados()
}

function pintarQuadrados() {
    let cadaquadrado = document.querySelectorAll(".grid")
    cadaquadrado.forEach(element => {
        element.addEventListener("mousemove", () => {
            element.style.backgroundColor = "black"
        })
    });
}

function limparQuadrados() {
    let cadaquadrado = document.querySelectorAll(".grid")
    let botaoLimpar = document.querySelector("#limpar")
    botaoLimpar.addEventListener("click", () => {
        cadaquadrado.forEach(element => {
            if (element.style.backgroundColor === "rgb(66, 60, 60)") {
                element.style.backgroundColor = "white"
            }

        })
    })

}

configurarTela(quantidadeQuadrados())

