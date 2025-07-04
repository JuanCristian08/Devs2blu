
let numeroSecreto = 0;
let tentativas = 0;
let perguntasQuiz = [];
let perguntaAtual = 0;
let acertos = 0;
let perguntasUsadas = [];

// Banco de perguntas para o quiz
const perguntasDisponiveis = [
    {
        pergunta: "Qual é a capital do Brasil?",
        alternativas: ["Rio de Janeiro", "São Paulo", "Brasília", "Belo Horizonte"],
        resposta: 2
    },
    {
        pergunta: "Quanto é 2 + 2?",
        alternativas: ["3", "4", "5", "6"],
        resposta: 1
    },
    {
        pergunta: "Qual é o maior planeta do sistema solar?",
        alternativas: ["Terra", "Marte", "Júpiter", "Saturno"],
        resposta: 2
    },
    {
        pergunta: "Em que ano o Brasil foi descoberto?",
        alternativas: ["1500", "1501", "1499", "1502"],
        resposta: 0
    },
    {
        pergunta: "Qual é o resultado de 5 × 8?",
        alternativas: ["35", "40", "45", "50"],
        resposta: 1
    },
    {
        pergunta: "Quem pintou a Mona Lisa?",
        alternativas: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"],
        resposta: 2
    },
    {
        pergunta: "Qual é o menor número primo?",
        alternativas: ["1", "2", "3", "4"],
        resposta: 1
    },
    {
        pergunta: "Quantos estados tem o Brasil?",
        alternativas: ["25", "26", "27", "28"],
        resposta: 1
    },
    {
        pergunta: "Qual é a fórmula química da água?",
        alternativas: ["H2O", "CO2", "NaCl", "CH4"],
        resposta: 0
    },
    {
        pergunta: "Em que continente fica o Egito?",
        alternativas: ["Ásia", "Europa", "África", "América"],
        resposta: 2
    }
];


function showExercise(exerciseId) {
    // Esconder todas as seções
    const sections = document.querySelectorAll('.exercise-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar a seção selecionada
    document.getElementById(exerciseId).classList.add('active');
    
    // Resetar jogos quando necessário
    if (exerciseId === 'adivinhacao') {
        iniciarJogo();
    }
}

// Exercício 1: Média do Aluno
function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById('resultado-media').innerHTML = 
            '<div class="resultado error">Por favor, insira todas as notas!</div>';
        return;
    }
    
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        document.getElementById('resultado-media').innerHTML = 
            '<div class="resultado error">As notas devem estar entre 0 e 10!</div>';
        return;
    }
    
    const media = (nota1 + nota2 + nota3) / 3;
    let situacao = '';
    let classe = '';
    
    if (media >= 7) {
        situacao = 'Aprovado';
        classe = 'success';
    } else if (media >= 5) {
        situacao = 'Recuperação';
        classe = 'warning';
    } else {
        situacao = 'Reprovado';
        classe = 'error';
    }
    
    document.getElementById('resultado-media').innerHTML = 
        `<div class="resultado ${classe}">
            <strong>Média:</strong> ${media.toFixed(2)}<br>
            <strong>Situação:</strong> ${situacao}
        </div>`;
}

// Exercício 2: Conversor de Moedas
function converterMoeda() {
    const valorReal = parseFloat(document.getElementById('valor-real').value);
    const tipoConversao = document.getElementById('tipo-conversao').value;
    
    if (isNaN(valorReal) || valorReal < 0) {
        document.getElementById('resultado-conversao').innerHTML = 
            '<div class="resultado error">Por favor, insira um valor válido!</div>';
        return;
    }
    
    // Cotações aproximadas (valores fictícios para demonstração)
    const cotacoes = {
        dolar: 5.50,
        euro: 6.00,
        libra: 7.00,
        bitcoin: 150000.00
    };
    
    const valorConvertido = valorReal / cotacoes[tipoConversao];
    let simbolo = '';
    
    switch (tipoConversao) {
        case 'dolar':
            simbolo = 'USD $';
            break;
        case 'euro':
            simbolo = 'EUR €';
            break;
        case 'libra':
            simbolo = 'GBP £';
            break;
        case 'bitcoin':
            simbolo = 'BTC ₿';
            break;
    }
    
    document.getElementById('resultado-conversao').innerHTML = 
        `<div class="resultado success">
            <strong>R$ ${valorReal.toFixed(2)}</strong> equivale a<br>
            <strong>${simbolo} ${valorConvertido.toFixed(tipoConversao === 'bitcoin' ? 8 : 2)}</strong><br>
            <small>Cotação: R$ ${cotacoes[tipoConversao].toFixed(2)}</small>
        </div>`;
}

// Exercício 3: Jogo de Adivinhação
function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    document.getElementById('tentativas').textContent = tentativas;
    document.getElementById('palpite').value = '';
    document.getElementById('resultado-jogo').innerHTML = '';
}

function verificarPalpite() {
    const palpite = parseInt(document.getElementById('palpite').value);
    
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        document.getElementById('resultado-jogo').innerHTML = 
            '<div class="resultado error">Por favor, insira um número entre 1 e 100!</div>';
        return;
    }
    
    tentativas++;
    document.getElementById('tentativas').textContent = tentativas;
    
    if (palpite === numeroSecreto) {
        document.getElementById('resultado-jogo').innerHTML = 
            `<div class="resultado success">
                🎉 <strong>Parabéns!</strong> Você acertou!<br>
                O número era <strong>${numeroSecreto}</strong><br>
                Tentativas: <strong>${tentativas}</strong>
            </div>`;
        document.getElementById('palpite').value = '';
        return;
    }
    
    const diferenca = Math.abs(palpite - numeroSecreto);
    let dica = '';
    
    if (diferenca <= 5) {
        dica = '🔥 Quase!';
    } else if (diferenca <= 10) {
        dica = '👍 Perto!';
    } else if (diferenca <= 20) {
        dica = '🤔 Longe!';
    } else {
        dica = '😅 Muito longe!';
    }
    
    const direcao = palpite > numeroSecreto ? 'menor' : 'maior';
    
    document.getElementById('resultado-jogo').innerHTML = 
        `<div class="resultado warning">
            ${dica}<br>
            O número é <strong>${direcao}</strong> que ${palpite}
        </div>`;
    
    document.getElementById('palpite').value = '';
}

// Exercício 4: Tabuada
function gerarTabuada() {
    const numero = parseInt(document.getElementById('numero-tabuada').value);
    
    if (isNaN(numero)) {
        document.getElementById('resultado-tabuada').innerHTML = 
            '<div class="resultado error">Por favor, insira um número válido!</div>';
        return;
    }
    
    let tabuada = `<div class="tabuada-resultado">
        <h3>Tabuada do ${numero}</h3>`;
    
    for (let i = 1; i <= 10; i++) {
        tabuada += `<div>${numero} × ${i} = ${numero * i}</div>`;
    }
    
    tabuada += '</div>';
    
    document.getElementById('resultado-tabuada').innerHTML = tabuada;
}

// Exercício 5: Fatorial
function calcularFatorial() {
    const numero = parseInt(document.getElementById('numero-fatorial').value);
    
    if (isNaN(numero) || numero < 0) {
        document.getElementById('resultado-fatorial').innerHTML = 
            '<div class="resultado error">Por favor, insira um número válido (não negativo)!</div>';
        return;
    }
    
    if (numero > 20) {
        document.getElementById('resultado-fatorial').innerHTML = 
            '<div class="resultado warning">Número muito grande! Digite um número menor que 21.</div>';
        return;
    }
    
    let fatorial = 1;
    let calculo = '';
    
    if (numero === 0 || numero === 1) {
        fatorial = 1;
        calculo = `${numero}! = 1`;
    } else {
        calculo = `${numero}! = `;
        for (let i = numero; i >= 1; i--) {
            fatorial *= i;
            calculo += i;
            if (i > 1) calculo += ' × ';
        }
        calculo += ` = ${fatorial}`;
    }
    
    document.getElementById('resultado-fatorial').innerHTML = 
        `<div class="resultado success">
            <strong>Cálculo do Fatorial:</strong><br>
            ${calculo}
        </div>`;
}

// Exercício 6: IMC
function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('resultado-imc').innerHTML = 
            '<div class="resultado error">Por favor, insira valores válidos!</div>';
        return;
    }
    
    const imc = peso / (altura * altura);
    let classificacao = '';
    let classe = '';
    
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        classe = 'warning';
    } else if (imc < 25) {
        classificacao = 'Peso normal';
        classe = 'success';
    } else if (imc < 30) {
        classificacao = 'Sobrepeso';
        classe = 'warning';
    } else if (imc < 35) {
        classificacao = 'Obesidade grau 1';
        classe = 'error';
    } else if (imc < 40) {
        classificacao = 'Obesidade grau 2';
        classe = 'error';
    } else {
        classificacao = 'Obesidade grau 3';
        classe = 'error';
    }
    
    document.getElementById('resultado-imc').innerHTML = 
        `<div class="resultado ${classe}">
            <strong>Seu IMC:</strong> ${imc.toFixed(2)}<br>
            <strong>Classificação:</strong> ${classificacao}
        </div>`;
}

// Exercício 7: Ano Bissexto
function verificarBissexto() {
    const ano = parseInt(document.getElementById('ano').value);
    
    if (isNaN(ano) || ano < 1) {
        document.getElementById('resultado-bissexto').innerHTML = 
            '<div class="resultado error">Por favor, insira um ano válido!</div>';
        return;
    }
    
    const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    
    document.getElementById('resultado-bissexto').innerHTML = 
        `<div class="resultado ${bissexto ? 'success' : 'warning'}">
            O ano <strong>${ano}</strong> ${bissexto ? 'é' : 'não é'} bissexto.
        </div>`;
}

// Exercício 8: Quiz
function iniciarQuiz() {
    perguntasQuiz = [];
    perguntaAtual = 0;
    acertos = 0;
    perguntasUsadas = [];
    
    // Selecionar 5 perguntas aleatórias sem repetição
    while (perguntasQuiz.length < 5) {
        const indiceAleatorio = Math.floor(Math.random() * perguntasDisponiveis.length);
        if (!perguntasUsadas.includes(indiceAleatorio)) {
            perguntasUsadas.push(indiceAleatorio);
            perguntasQuiz.push(perguntasDisponiveis[indiceAleatorio]);
        }
    }
    
    document.getElementById('pergunta-container').style.display = 'block';
    document.getElementById('resultado-quiz').innerHTML = '';
    document.querySelector('#quiz-container button').style.display = 'none';
    
    mostrarPergunta();
}

function mostrarPergunta() {
    if (perguntaAtual >= perguntasQuiz.length) {
        finalizarQuiz();
        return;
    }
    
    const pergunta = perguntasQuiz[perguntaAtual];
    
    document.getElementById('pergunta-atual').textContent = perguntaAtual + 1;
    document.getElementById('acertos').textContent = acertos;
    document.getElementById('pergunta-texto').textContent = pergunta.pergunta;
    
    const alternativasContainer = document.getElementById('alternativas');
    alternativasContainer.innerHTML = '';
    
    pergunta.alternativas.forEach((alternativa, index) => {
        const div = document.createElement('div');
        div.className = 'alternativa';
        div.textContent = `${String.fromCharCode(65 + index)}) ${alternativa}`;
        div.onclick = () => selecionarAlternativa(index);
        alternativasContainer.appendChild(div);
    });
    
    document.getElementById('proxima-pergunta').style.display = 'none';
}

function selecionarAlternativa(indiceEscolhido) {
    const pergunta = perguntasQuiz[perguntaAtual];
    const alternativas = document.querySelectorAll('.alternativa');
    
    // Remover eventos de click
    alternativas.forEach(alt => alt.onclick = null);
    
    // Marcar a alternativa escolhida
    alternativas[indiceEscolhido].classList.add('selected');
    
    // Mostrar resposta correta
    if (indiceEscolhido === pergunta.resposta) {
        alternativas[indiceEscolhido].classList.add('correct');
        acertos++;
    } else {
        alternativas[indiceEscolhido].classList.add('incorrect');
        alternativas[pergunta.resposta].classList.add('correct');
    }
    
    document.getElementById('proxima-pergunta').style.display = 'block';
}

function proximaPergunta() {
    perguntaAtual++;
    mostrarPergunta();
}

function finalizarQuiz() {
    document.getElementById('pergunta-container').style.display = 'none';
    document.querySelector('#quiz-container button').style.display = 'block';
    
    const porcentagem = (acertos / perguntasQuiz.length) * 100;
    let classe = '';
    
    if (porcentagem >= 80) classe = 'success';
    else if (porcentagem >= 60) classe = 'warning';
    else classe = 'error';
    
    document.getElementById('resultado-quiz').innerHTML = 
        `<div class="resultado ${classe}">
            <h3>Quiz Finalizado!</h3>
            <strong>Acertos:</strong> ${acertos} de ${perguntasQuiz.length}<br>
            <strong>Porcentagem:</strong> ${porcentagem.toFixed(1)}%
        </div>`;
}

// Inicializar o jogo de adivinhação quando a página carregar
window.onload = function() {
    iniciarJogo();
}

// Permitir Enter nos campos de input
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const activeSection = document.querySelector('.exercise-section.active');
        if (!activeSection) return;
        
        const sectionId = activeSection.id;
        
        switch(sectionId) {
            case 'media':
                calcularMedia();
                break;
            case 'conversor':
                converterMoeda();
                break;
            case 'adivinhacao':
                verificarPalpite();
                break;
            case 'tabuada':
                gerarTabuada();
                break;
            case 'fatorial':
                calcularFatorial();
                break;
            case 'imc':
                calcularIMC();
                break;
            case 'bissexto':
                verificarBissexto();
                break;
        }
    }
});

// Limpar campos quando mudar de exercício
function showExercise(exerciseId) {
    // Esconder todas as seções
    const sections = document.querySelectorAll('.exercise-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar a seção selecionada
    document.getElementById(exerciseId).classList.add('active');
    
    // Limpar resultados
    const resultados = document.querySelectorAll('.resultado');
    resultados.forEach(resultado => {
        resultado.innerHTML = '';
    });
    
    // Resetar campos específicos
    if (exerciseId === 'adivinhacao') {
        iniciarJogo();
    }
    
    // Scroll para o topo
    window.scrollTo(0, 0);
}