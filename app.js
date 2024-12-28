let listaSorteados = [];
let tamanhoLimite = 100;
let tentativa = 1;
let numeroSecreto = gerarNumeroAleatorio();

function trocaTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
   
//Habilitar código para a narração do texto exibido
/*    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
} */
}
function exibirMensagemInicial(){
    let mensagemNumero = `Escolha um número entre 1 e ${tamanhoLimite}:`;
    trocaTexto('h1','Jogo do número secreto');
    trocaTexto('p', mensagemNumero);
}
function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto)
    if (chute == numeroSecreto){
        trocaTexto('h1', 'Parabéns, você acertou!')
        let palavraTentativa = tentativa == 1 ? 'tentativa':'tentativas';
        let mensagemTentativa = `O número secreto é ${numeroSecreto}. Você conseguiu com ${tentativa} ${palavraTentativa}.`
        trocaTexto('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
        
    } else {
        if(chute > numeroSecreto) {
            trocaTexto('p', `O número secreto é menor do que ${chute}`);
        }
        else {
            trocaTexto('p', `O número secreto é maior do que ${chute}`);
        }
        tentativa ++;
        limparCampo();
        console.log(numeroSecreto)
}}   
function gerarNumeroAleatorio() {
        let geraNumeroSecreto = parseInt(Math.random() * tamanhoLimite + 1);
        let quantidadeElementosLista = listaSorteados.length;

        if(quantidadeElementosLista == tamanhoLimite){
            listaSorteados = [];
        }

        if(listaSorteados.includes(geraNumeroSecreto)){
            return gerarNumeroAleatorio();
        } else{
            listaSorteados.push(geraNumeroSecreto);
            return geraNumeroSecreto;
        }
}   
function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
}   
function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativa = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled',true);
} 
exibirMensagemInicial();
