const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const result = document.getElementById("result");

let shuffledQuestions, currentQuestionsIndex, score;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const questions = [
    // Perguntas de HTML
    {
        question: "Qual é a função da tag <head> em um documento HTML?",
        answer: [
            { texto: "Armazenar metadados e links para recursos externos", correto: true },
            { texto: "Exibir o conteúdo principal da página", correto: false },
            { texto: "Criar seções e divisões na página", correto: false },
            { texto: "Definir o rodapé do site", correto: false }
        ],
    },
    {
        question: "Qual tag é usada para criar um link em HTML?",
        answer: [
            { texto: "<link>", correto: false },
            { texto: "<href>", correto: false },
            { texto: "<a>", correto: true },
            { texto: "<url>", correto: false }
        ],
    },
    {
        question: "Qual atributo HTML é usado para fornecer um texto alternativo a uma imagem?",
        answer: [
            { texto: "alt", correto: true },
            { texto: "title", correto: false },
            { texto: "src", correto: false },
            { texto: "desc", correto: false }
        ],
    },
    {
        question: "Qual elemento HTML é usado para criar uma lista ordenada?",
        answer: [
            { texto: "<ol>", correto: true },
            { texto: "<ul>", correto: false },
            { texto: "<li>", correto: false },
            { texto: "<list>", correto: false }
        ],
    },
    {
        question: "Qual tag HTML é usada para definir um campo de entrada de texto?",
        answer: [
            { texto: "<textarea>", correto: false },
            { texto: "<input>", correto: true },
            { texto: "<textbox>", correto: false },
            { texto: "<field>", correto: false }
        ],
    },

    // Perguntas de CSS
    {
        question: "Qual propriedade CSS é usada para alterar a cor do texto?",
        answer: [
            { texto: "text-color", correto: false },
            { texto: "font-color", correto: false },
            { texto: "foreground-color", correto: false }
            { texto: "color", correto: true },
        ],
    },
    {
        question: "Qual unidade de medida é relativa ao tamanho da fonte do elemento pai?",
        answer: [
            { texto: "px", correto: false },
            { texto: "pt", correto: false },
            { texto: "vh", correto: false }
            { texto: "em", correto: true },
        ],
    },
    {
        question: "Qual propriedade CSS é usada para definir o espaçamento interno de um elemento?",
        answer: [
            { texto: "margin", correto: false },
            { texto: "border", correto: false },
            { texto: "padding", correto: true },
            { texto: "spacing", correto: false }
        ],
    },
    {
        question: "Qual propriedade CSS define a transparência de um elemento?",
        answer: [
            { texto: "opacity", correto: true },
            { texto: "visibility", correto: false },
            { texto: "transparent", correto: false },
            { texto: "filter", correto: false }
        ],
    },
    {
        question: "Qual valor da propriedade 'position' faz com que um elemento seja fixo na tela ao rolar a página?",
        answer: [
            { texto: "fixed", correto: true },
            { texto: "absolute", correto: false },
            { texto: "relative", correto: false },
            { texto: "sticky", correto: false }
        ],
    },

    // Perguntas de JavaScript
    {
        question: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        answer: [
            { texto: "var", correto: false },
            { texto: "const", correto: false },
            { texto: "let", correto: true },
            { texto: "declare", correto: false }
        ],
    },
    {
        question: "Qual método é usado para exibir uma mensagem no console?",
        answer: [
            { texto: "alert()", correto: false },
            { texto: "document.write()", correto: false },
            { texto: "print()", correto: false }
            { texto: "console.log()", correto: true },
        ],
    },
    {
        question: "Como se chama uma função que é passada como argumento para outra função?",
        answer: [
            { texto: "Callback", correto: true },
            { texto: "Promise", correto: false },
            { texto: "Arrow function", correto: false },
            { texto: "Method", correto: false }
        ],
    },
    {
        question: "Qual operador é usado para verificar estrita igualdade em JavaScript?",
        answer: [
            { texto: "==", correto: false },
            { texto: "===", correto: true },
            { texto: "!=", correto: false },
            { texto: "!==", correto: false }
        ],
    },
    {
        question: "Qual método é usado para transformar um array em uma única string, separada por um delimitador?",
        answer: [
            { texto: "split()", correto: false },
            { texto: "concat()", correto: false },
            { texto: "join()", correto: true },
            { texto: "toString()", correto: false }
        ],
    }
];


