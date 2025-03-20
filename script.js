let container = document.querySelector("#container")

function quantidadeQuadrados(padrao = 16) {
    let botaoConfigurar = document.querySelector("#configure")
    botaoConfigurar.addEventListener("click", () => {
        let quantidade = prompt("Digite a configuracao da sua tela. Se digitar '50', entao sua configuaracaoo sera 50x50")
        if (quantidade <= 0 || quantidade > 100) {
            alert("O numero deve ser maior que zero e menor ou igual a 100.")
        } else {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            configurarTela(quantidade)
        }
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
    let preto = document.querySelector("#preto")
    let colorido = document.querySelector("#colorido")
    let click = ""

    preto.addEventListener("click", () => {
        cadaquadrado.forEach(element => {
            element.addEventListener("mousemove", () => {
                element.style.backgroundColor = "black"
            })
        });
    })
    colorido.addEventListener("click", () => {
        cadaquadrado.forEach(element => {
            element.addEventListener("mousemove", () => {
                element.style.backgroundColor = mudarCor()
            })
        });
    })
}

function limparQuadrados() {
    let cadaquadrado = document.querySelectorAll(".grid")
    let botaoLimpar = document.querySelector("#limpar")
    botaoLimpar.addEventListener("click", () => {
        cadaquadrado.forEach(element => {
            if (element.style.backgroundColor != "white") {
                element.style.backgroundColor = "white"
            }

        })
    })

}

function mudarCor(){
    let cor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return cor
}

configurarTela(quantidadeQuadrados())

