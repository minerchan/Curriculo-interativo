// 2.2 é o mínimo 2.7VH é o máximo da fonte
// DESABILITAR O ZOOM E PERMITIR SÓ ENTRE 100% E 160%
// SE CAIXA DE TEXTO TIVER VAZIO RETORNAR "POR FAVOR COLOQUE SEU NOME"
// FAZER O BOTAO DE POR O NOME RESPONDER AO TECLADO
// CONSERTAR O nome do chat tem que ser com letra maiúscula no começo também
// DIGITANDO - CRIAR FUNCTION ONLINE TEM QUE VIRAR DIGITANDO... E USAR SEMPRE QUE FOR EXECUTAR O PRÓXIMO CHAT DA PESSOA 
// CONVERSA - INSERIR TEMPO UNIFORME DE ESPERA ENTRE CHATS NUMA FUNÇÃO. USAR ELA SEMPRE ANTES DA EXIBIÇÃO DE UMA CAIXA DE MENSAGEM 

// Coloquei todos os chats numa lista e usei ela para mudar o tamanho da fonte de todos os chats, se chegar ao máximo ele loga

const ListaDeChat = document.querySelectorAll('.chat');
for (let index = 0; index < ListaDeChat.length; index++) {
  let tamanhoDaFonte = ListaDeChat[index].style.fontSize = "2.2vh";
  if(tamanhoDaFonte === "2.7vh"){
  console.log(tamanhoDaFonte)}
}

// aqui eu vou fazer o botao de aumentar e diminuir fonte





// Salvei o botao na constante botao

const botao = document.querySelector("#botao");


// Nessa funcao quando clica no botao ele salva o texto, troca a variavel pro texto e tira o esconder do chat
botao.addEventListener('click', ()=>{
  let nome = "";
  nome = document.querySelector("#caixa").value
  if(nome === ""){
    console.log("funciona")
  } else {
  document.querySelector('#gridchat').style.display = "none";
  document.querySelector('.conversa').classList.remove("escondido");
  document.querySelector("#nomeDaPessoa").textContent = nome;
  document.querySelector("#variavel").textContent = nome;
}
})
