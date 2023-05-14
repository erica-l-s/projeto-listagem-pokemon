const botaoAlterarTema = document.getElementById("botao-alterar-tema")
console.log(botaoAlterarTema)
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

const body = document.querySelector("body")
console.log(body);

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro")
    if (modoEscuroAtivo) {
        body.classList.toggle("modo-escuro")
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/img/sun.png")
    } else {
        body.classList.add("modo-escuro")
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/img/moon.png")
    }


})