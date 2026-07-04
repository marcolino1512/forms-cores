# Forms Cores

Formulário de login simples com um seletor de cores. Ao clicar em uma das bolinhas de cor, o painel direito, o título e o botão de "Entrar" mudam de cor com uma transição suave.

## Demo

Depois de habilitar o GitHub Pages (veja abaixo), o projeto ficará disponível em:

```
https://marcolino1512.github.io/forms-cores/
```

## Estrutura do projeto

```
├── index.html   # Estrutura da página (formulário + seletor de cores)
├── style.css    # Estilos e transições de cor
└── java.js      # Lógica de troca de cor ao clicar nas bolinhas
```

## Como funciona

- O `index.html` contém o formulário de login e uma lista de `<span>` (as bolinhas de cor), cada um com um evento `onclick` que chama `changeColor(cor)`.
- O `java.js` seleciona os elementos que mudam de cor (painel direito, botão e título) e atualiza o estilo deles quando `changeColor` é chamado.
- O `style.css` define o layout do formulário e as transições (`transition`) que deixam a troca de cor suave em vez de instantânea.

## Como usar localmente

Basta abrir o arquivo `index.html` no navegador — não é necessário nenhum servidor ou instalação.

## Como publicar no GitHub Pages

1. Acesse o repositório no GitHub: `https://github.com/marcolino1512/forms-cores`
2. Vá em **Settings > Pages**
3. Em **Branch**, selecione `main` e a pasta `/ (root)`
4. Salve — o GitHub vai gerar a URL pública em alguns instantes

## Tecnologias

- HTML5
- CSS3 (Flexbox, variáveis CSS, transições)
- JavaScript (DOM puro, sem dependências)
