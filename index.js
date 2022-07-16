// fazer botao responder ao enter do teclado
// O nome do chat tem que ser com letra maiúscula no começo também
// ONLINE TEM QUE VIRAR 3 PONTOS SEMPRE QUE FOR EXECUTAR O PRÓXIMO CHAT DA PESSOA 
// fazer os baloes de chat vir um a um



// Salvei o botao na constante botao
const botao = document.querySelector("#botao");

// Nessa funcao quando clica no botao ele salva o texto, troca a variavel pro texto e tira o esconder do chat
botao.addEventListener('click', ()=>{
  let nome = "nome";
  nome = document.querySelector("#caixa").value
  document.querySelector('#gridchat').style.display = "none";
  document.querySelector('.chat').classList.remove("escondido");
  document.querySelector("#nomeDaPessoa").textContent = nome;
  document.querySelector("#variavel").textContent = nome;
  console.log(nome)
})

