// Seleciona o elemento do painel direito (onde fica o título "Cores"),
// que terá a cor de fundo alterada conforme o botão clicado
const formRight = document.querySelector(".form-right");

// Seleciona o botão de "Entrar" (submit) do formulário,
// que também muda de cor junto com o painel direito
const btn = document.querySelector("#btn");

// Seleciona o título (h1) dentro do formulário,
// cuja cor do texto acompanha a cor escolhida
const h1 = document.querySelector("form h1");

// Função chamada pelo evento "onclick" de cada bolinha de cor (span)
// definido no HTML. Recebe a cor clicada e aplica nos 3 elementos acima.
function changeColor(color) {
    // Altera a cor de fundo do painel direito
    formRight.style.background = color;

    // Altera a cor de fundo do botão de entrar
    btn.style.background = color;

    // Altera a cor do texto do título do formulário
    h1.style.color = color;
}
