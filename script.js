const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    
        {
            enunciado: "Ao assistir a uma partida do Flamengo, você vê um jogador fazer um gol incrível nos últimos minutos do jogo, garantindo a vitória para o time. Qual é sua reação imediata?",
            alternativas: [
                {
                    texto: "Fico emocionado e começo a comemorar efusivamente.",
                    afirmacao: "Ficou emocionado com o gol e comemorou intensamente."
                },
                {
                    texto: "Acho interessante, mas mantenho minha calma.",
                    afirmacao: "Apreciou o gol, mas manteve a compostura."
                }
            ]
        },
        {
            enunciado: "O técnico do Flamengo decide fazer uma mudança tática radical no time, optando por uma formação pouco convencional em um jogo importante. Como você reage a essa decisão?",
            alternativas: [
                {
                    texto: "Apoio a decisão do técnico, confiando em sua expertise e visão estratégica.",
                    afirmacao: "Apoiou a decisão do técnico, reconhecendo sua autoridade e sabedoria."
                },
                {
                    texto: "Fico preocupado e questiono a escolha do técnico.",
                    afirmacao: "Sentiu-se preocupado e questionou a decisão do técnico."
                }
            ]
        },
        {
            enunciado: "Após uma derrota frustrante, os jogadores do Flamengo estão abatidos e desanimados. Como você os motiva a seguir em frente?",
            alternativas: [
                {
                    texto: "Elogio o esforço deles e os encorajo a aprender com a derrota para melhorar no futuro.",
                    afirmacao: "Elogiou o esforço dos jogadores e os incentivou a aprender com a derrota."
                },
                {
                    texto: "Critico o desempenho deles e exijo uma reação imediata.",
                    afirmacao: "Critica o desempenho dos jogadores e exige uma reação imediata."
                }
            ]
        },
        {
            enunciado: "Você é convidado para participar de um debate sobre a importância do Flamengo para o futebol brasileiro. Como você defende o papel do time?",
            alternativas: [
                {
                    texto: "Destaco a história gloriosa do Flamengo e sua contribuição para o desenvolvimento do futebol no Brasil.",
                    afirmacao: "Destacou a história gloriosa do Flamengo e sua contribuição para o futebol brasileiro."
                },
                {
                    texto: "Minimizo a importância do Flamengo e destaco outros times como mais relevantes.",
                    afirmacao: "Minimizou a importância do Flamengo em relação a outros times."
                }
            ]
        },
        {
            enunciado: "Durante uma partida decisiva, um jogador do Flamengo comete um erro crucial que resulta no gol adversário. Como você reage a esse erro?",
            alternativas: [
                {
                    texto: "Demonstro apoio ao jogador, enfatizando que todos cometem erros e encorajando-o a se recuperar.",
                    afirmacao: "Demonstrou apoio ao jogador e o encorajou a se recuperar do erro."
                },
                {
                    texto: "Critico o jogador pelo erro cometido e questiono sua capacidade.",
                    afirmacao: "Critica o jogador pelo erro e questiona sua capacidade."
                }
            ]
        }
    ];
    


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
