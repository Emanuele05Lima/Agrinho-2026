const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são os príncipios da Educação do Campo?",
        alternativas: [
            {
                texto: "Valorização dos saberes e da cultura ali envolvida.",
                afirmacao: "<b>Conhecimento</b> A Educação do campo valoriza os saberes tradicionais e a cultura, que e fundamental para o processo de educação de crianças."
            },
            {
                texto: "Respeito á nacinalidade e ao modo de vida das comunidades rurais.",
                afirmacao: "Você se destaca por seu <b>Conhecimento</b>, O respeito a nacionalidade e aos modos de vida do campo é essencial,pois a escola deve dialogar com a realidade local do campo."
            }
        ]
    },
    {
        enunciado: "Práticas compatíveis com os objetivos da Escola do campo?",
        alternativas: [
            {
                texto: "Adaptação do calendário escolar ao clima da comunidade",
                afirmacao: "A flexibilação do calendário escolar é uma prática comum para respeitar o ciclo do clima da região <b>Importância</b>.</b>."
            },
            {
                texto: "Formação de professoes com base nas realidades locais do campo.",
                afirmacao: "A formação de professores deve considerar as especificidades <b>Importância</b> do campo capacitando para trabalgar com metodologias contextualizadas."
            }
        ]
    },
    {
        enunciado: "Oque contribuem para uma Educação do Campo?",
        alternativas: [
            {
                texto: "Participação ativa da comunidade na gestão escolar",
                afirmacao: "<bIncentivo</b> A gestão se fortalece com a participação sa comunidade e o vínculo permite a contrução de um projeto pedagógico."
            },
            {
                texto: "Inclusão de práticas pedagógicas que dialoguem com o ambiente rural.",
                afirmacao: "<b>Inclusão</b>, A prática pedagógica deve considerar o contexto rural,promovendo o desenvolvimento integral."
            }
        ]
    },
    {
        enunciado: "Quais os desafios as Escolas do campo enfrentam? ",
        alternativas: [
            {
                texto: "Dificuldade de acesso geográfico",
                afirmacao: "<b>Localização</b> O difícil acesso geográfico é problema recorrente de muitas comunidades rurais."
            },
            {
                texto: "falta de formação específica para professores atuarem no campo.",
                afirmacao: "<b>Importância</b> A ausência de formação adequada para docentes causa impacto diretamente na qualidade do ensino oferecido. "
            }
        ]
    },
    {
        enunciado: "Como evitar que ocorra a extinção de animais nativos?",
        alternativas: [
            {
                texto: "Criação de mais áreas de proteção ambiental, com grande biodiversidade ajudaria a melhorar esse cenário?",
                afirmacao: "Sim, pois preservando nosso meio ambiente, protegemos nossos animais e facilitamos sua reprodução "
            },
            {
                texto: "Evitar intervenções de espécies não nativas neste ambiente pode ser uma alternativa?",
                afirmacao: "Sim, animais de um determinado local não estão preparados para lidar com predadores de outras áreas, levando a um extermínio da espécie local"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta(); 