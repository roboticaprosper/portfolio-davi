const perguntas = [
    {
        pergunta: "Qual é o inimigo mais irritante?",
        opcoes: ["soldado noturno de pistola", "drone", "soldado gigante de moicano", "todas as alternativas"],
        correta: 3
    },
    {
        pergunta: "O que acontence se a pessoa segurar o botao de soco",
        opcoes: ["ele solta um ataque especial que tira 90 de HP", "ele explode todo mundo que tira 0,5 de HP", "ele desfere um monte de socos que cada um tira 25 de HP", "ele começa a girar dando varios socos em volta de si mesmo cada um tirando 100 de HP"],
        correta: 0
        

    },
    {
        pergunta: "Quantas comidas tem em dan the man?",
        opcoes: ["maçã, coxa de frango, um peru inteiro", "batata frita, pizza de batata frita, nescau com coxa de frango", "bife, sorvete, um sanduishe ", "picole de gema, bolo, uranio"],
        correta: 0
    },
    {
        pergunta: "quais animais os soldados tem como inimigos?",
        opcoes: ["cavalo e um pombo que explode uranio", "cachorro militar e um morcego", "cavalo da realeza e o cachorro militar", "skibidi toilet e o labubu"],
        correta: 1
    },
    {
        pergunta: "quantos inimigos tem no jogo?(considerando ate os exclusivos)",
        opcoes: ["59", "39", "97", "+100s"],
        correta: 1
    },
    {
        pergunta: "qual é a arma mais forte?",
        opcoes: ["Modern Rifle", "Carlgustav", "AK Rifle", "RPG-7"],
        correta: 1
    },
    {
        pergunta: "qual é a arma mais forte?",
        opcoes: ["Modern Rifle", "Carlgustav", "AK Rifle", "RPG-7"],
        correta: 1
    },
    {
        pergunta: "tem como melhorar uma arma no jogo?",
        opcoes: ["sim","não"],
        correta: 0
    },

    
]

let atual = 0
let pontos = 0

let tempo = 0
let intervalo  = 0

function formatarTempo(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;

    return `${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`
}


function iniciarTimer() {
    intervalo = setInterval(() => {
        tempo++;
        document.getElementById("timer").textContent =
        "tempo: " + formatarTempo(tempo);
    }, 1000);
}

function carregarpergunta() {
    const p = perguntas[atual];

    document.getElementById("pergunta").textContent = p.pergunta;
    document.getElementById("opcoes").innerHTML = "";
    document.getElementById("proxima").style.display = "nome";
    
    p.opcoes.forEach((opcoes, i) => {
        const botao = document.createElement("button");
        botao.textContent = opcoes;
        botao.classList.add("opcao");

        botao.onclick = () => responder(botao, i);

        document.getElementById("opcoes").appendChild(botao);
    });

  
}

function responder(botaoClicado, indice) {
    const botoes = document.querySelectorAll(".opcao");
    const perguntaAtual = perguntas[atual];

    botoes.forEach(botao => {
        botao.disabled = true;
    });

    if(indice === perguntaAtual.correta) {
        botaoClicado.classList.add("certa");
        pontos++;
        document.getElementById("pontos").textContent = "Pontos: " + pontos;


    } else {
      botaoClicado.classList.add("errada");
      
      
      botoes[perguntaAtual.correta].classList.add("certa");
    }

    document.getElementById("proxima").style.display = "block";
}

document.getElementById("proxima").onclick = () => {
    atual++;

    if (atual < perguntas.length) {
        carregarpergunta();
    } else {
        finalizarQuiz();

    }
};

function finalizarQuiz() {
    clearInterval(intervalo);


    document.getElementById("pergunta").textContent = 
    "parabens! voce completou o quiz"

    document.getElementById("opcoes").innerHTML = `
    <h2>você fez ${pontos}</h2>
    <p>tempo total: ${formatarTempo(tempo)}</p>
    `;

}


carregarpergunta();
iniciarTimer();