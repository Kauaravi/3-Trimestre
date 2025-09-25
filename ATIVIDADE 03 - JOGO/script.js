let numeroSecreto; //O número que o jogador precisa adivinhar
let contadorDeChances = 1 //Começa na primeira chance
const MAX_CHANCES = 10 // Número máximo de chances

const campoPalpite = document.querySelector('#campoPalpite');
const botaoEnviarPalpite = document.querySelector('#botaoEnviarPalpite');
const botaoReiniciar = document.querySelector('#botaoReinicar');

const mensagemElement = document.querySelector('mensagem');
const palpitesAnterioresElement = document.querySelector('palpites-anteriores');
const dicaElement = document.querySelector('.dica')
const chancesRestantesElement = document.querySelector('#chancesRestantes');

let listaDePalpites = []; // Array para guardar os palpites que o jogador vai chutar
function iniciarJogo() {
    //Gerar um novo número secreto (entre 1 e 100)
    //Math.random() gera um númerp entre 0 (inclusive) e 1 (exclusive)
    //Multiplicamos por 100 para ter entre 0 e 99.99...
    //Adicionar 1 para ter entre 1 e 100.99...
    //Math.floor() arredonda para o menor inteiro, então teremos entre 1 e 100
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log('Número Secretp (apenas para teste):',
    numeroSecreto); //Ajuda no debug!

    contadorDeChances = 1; //Resetar o contador de chances
    chancesRestantesElement.textContent = MAX_CHANCES; //Mostra o total de chances

    //Limpar as mensagens anteriores
    mensagemElement.textContent = '';
    palpitesAnterioresElement.textContent = '';
    dicaElement.textContent = '';
    listaDePalpites = []; //Limpa a lista de palpites

    //Resetar as cores das mensagens
    mensagemElement.style.color = '#f0f0f0'; //Cor padrão de texto
    dicaElement.style.color = '#ffe3b'; //Cor padrão da dica
    
    campoPalpite.disabled = false; //Reativar o campo de palpite e o botão de enviar
    botaoEnviarPalpite.disabled = false;
    campoPalpite.value = ''; //Limpa o campo de entrada
    campoPalpite.focus(); //Coloca o cursor no campo para o usuário digitar

    botaoReiniciar.classList.add('hidden'); //Esconder o botão de reiniciar
    }