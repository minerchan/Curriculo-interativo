// Nome nao pode ter mais que 30 letras
// DESABILITAR O ZOOM E PERMITIR SÓ ENTRE 100% E 160%
// SE CAIXA DE TEXTO TIVER VAZIO RETORNAR "POR FAVOR COLOQUE SEU NOME"
// FAZER O BOTAO DE POR O NOME RESPONDER AO TECLADO
// CONSERTAR O nome do chat tem que ser com letra maiúscula no começo também
// DIGITANDO - CRIAR FUNCTION ONLINE TEM QUE VIRAR DIGITANDO... E USAR SEMPRE QUE FOR EXECUTAR O PRÓXIMO CHAT DA PESSOA 
// CONVERSA - INSERIR TEMPO UNIFORME DE ESPERA ENTRE CHATS NUMA FUNÇÃO. USAR ELA SEMPRE ANTES DA EXIBIÇÃO DE UMA CAIXA DE MENSAGEM 

// Coloquei todos os chats numa lista e usei ela para mudar o tamanho da fonte de todos os chats, se chegar ao máximo ele loga
// DEIXA AQUI PARA QUANDO EU DESCOBRIR COMO MANIPULAR ISSO


// AQUI É ONDE DEFINE O ZOOM MÁXIMO E ZOOM MÍNIMO
const ListaMais = document.querySelector(".mais");
const ListaMenos = document.querySelector(".menos");
const ListaDeChat = document.querySelectorAll('.chat');
let numeroFonteA = 2.2;


ListaMais.addEventListener('click', function(){
  if(numeroFonteA >= 2.7){
    ListaMais.style.backgroundColor = "#A27B5C";
  } else{
    ListaMenos.style.backgroundColor = "#DCD7C9";
    numeroFonteA = numeroFonteA + 0.1;
    numeroFonteA.toFixed(1);
    ListaDeChat[0].style.fontSize = `${numeroFonteA}vh`
    ListaDeChat[1].style.fontSize = `${numeroFonteA}vh`
    ListaDeChat[2].style.fontSize = `${numeroFonteA}vh`
    ListaDeChat[3].style.fontSize = `${numeroFonteA}vh`
    ListaDeChat[4].style.fontSize = `${numeroFonteA}vh`
    ListaDeChat[5].style.fontSize = `${numeroFonteA}vh`
  }
})
ListaMenos.addEventListener('click', function(){
  
  if(numeroFonteA < 2.2){
    ListaMenos.style.backgroundColor = "#A27B5C";
    }
    else{
    ListaMenos.style.backgroundColor = "#DCD7C9";
    ListaMais.style.backgroundColor = "#DCD7C9";
    numeroFonteA = numeroFonteA - 0.1;
    numeroFonteA.toFixed(1);
    ListaDeChat[0].style.fontSize = `${numeroFonteA}vh`
    ListaDeChat[1].style.fontSize = `${numeroFonteA}vh`
    ListaDeChat[2].style.fontSize = `${numeroFonteA}vh`
    ListaDeChat[3].style.fontSize = `${numeroFonteA}vh`
    ListaDeChat[4].style.fontSize = `${numeroFonteA}vh`
    ListaDeChat[5].style.fontSize = `${numeroFonteA}vh`
    }
  })

// Nessa funcao quando clica no botao ele salva o texto, troca a variavel pro texto e tira o esconder do chat

const botao = document.querySelector("#botao");

botao.addEventListener('click', ()=>{
  let nome = "";
  nome = document.querySelector("#caixa").value
  if(nome === ""){
    console.log("funciona")
  } else {
  document.querySelector('#textoalin').style.display = "none";
  document.querySelector('.conversa').classList.remove("escondido");
  document.querySelector("#nomeDaPessoa").textContent = nome;
  document.querySelector("#variavel").textContent = nome;
}
})