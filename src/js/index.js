const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const botaoAleterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const a = document.querySelector("a");
const footer = document.querySelector("footer")
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");


botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
    })
})
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

botaoAleterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");
    nav.classList.toggle("modo-escuro");
    a.classList.toggle("modo-escuro");
    footer.classList.toggle("modo-escuro")

    if(modoEscuroEstaAtivo){
      imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/imagemAcessibilidade(preta).png");
    }
      else{
          imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/imagemAcessibilidade(Branca).png");
      }
  });