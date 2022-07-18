// CONVERSA - INSERIR TEMPO UNIFORME DE ESPERA ENTRE CHATS NUMA FUNÇÃO. USAR ELA SEMPRE ANTES DA EXIBIÇÃO DE UMA CAIXA DE MENSAGEM 
// CONSERTAR O nome do chat tem que ser com letra maiúscula no começo também

// Coloquei todos os chats numa lista e usei ela para mudar o tamanho da fonte de todos os chats, se chegar ao máximo ele loga
// DEIXA AQUI PARA QUANDO EU DESCOBRIR COMO MANIPULAR ISSO


let online1 = document.querySelector('#online1');
let online2 = document.querySelector('#online2');


















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

// AQUI É O TESTE
    balaoum()
    balaodois()
    balaotres()
    balaoquatro()
    balaocinco()
    balaoseis()
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

// Nessa funcao quando tiver um nome e der enter ou clicar no botao ele salva o texto, troca a variavel pro texto e tira o esconder do chat. Se não tiver um nome ele troca o placeholder para "por favor insira um nome válido", se for um nome maior que 20 catacteres então exibe "Insira um nome MENOR por favor"

const barra = document.querySelector('#caixa');
const botao = document.querySelector("#botao");

barra.addEventListener('keydown', (e)=>{
  if(e.code === "Enter" || e.code === "NumpadEnter") {
  if(barra.value.length > 20){
    barra.value = "";
    barra.placeholder='Insira um nome MENOR por favor';
  } else {
  let nome = "";
  nome = barra.value
  if(nome === ""){
    document.querySelector('#caixa').placeholder='Por favor insira um nome válido';
  } else {
  document.querySelector('#textoalin').style.display = "none";
  document.querySelector('.conversa').classList.remove("escondido");
  document.querySelector("#nomeDaPessoa").textContent = nome;
  document.querySelector("#variavel").textContent = nome;
}
  }
}
})
botao.addEventListener('click', ()=>{
  if(barra.value.length > 20){
    barra.value = "";
    barra.placeholder='Insira um nome MENOR por favor';
  } else{
  let nome = "";
  nome = barra.value
  if(nome === ""){
    document.querySelector('#caixa').placeholder='Por favor insira um nome válido';
  } else {
  document.querySelector('#textoalin').style.display = "none";
  document.querySelector('.conversa').classList.remove("escondido");
  document.querySelector("#nomeDaPessoa").textContent = nome;
  document.querySelector("#variavel").textContent = nome;
}
}})

// REMOVER ESCONDIDO DO BALAO A CADA 1 SEGUNDO


const balao1 = document.querySelector('#balao1');
const balao2 = document.querySelector('#balao2');
const balao3 = document.querySelector('#balao3');
const balao4 = document.querySelector('#balao4');
const balao5 = document.querySelector('#balao5');
const balao6 = document.querySelector('#balao6');
const seta = document.querySelector('.seta');

function conversa1(){
  setTimeout(function(){
    online1.textContent = "Digitando..."

  }, 1000);
  
};
function conversa2(){
  setTimeout(function(){
    online2.textContent = "Digitando..."

  }, 1000);
  
};





function balaoum(){
  setTimeout(function(){
  balao1.classList.remove("escondido");
  online1.textContent = "online"
  
}, 2000);
online1.textContent = "Digitando..."
}
// digitando instantaneo
// aos 2 segundos aparece o balao

function balaodois(){
  setTimeout(function(){
  balao2.classList.remove("escondido");
  online2.textContent = "online"
  
}, 6000);
setTimeout(function(){
online2.textContent = "Digitando..."}, 4000)
}
// digitando aos 4 segundos
// aos 6 segundos aparece o chat

function balaotres(){
  setTimeout(function(){
  balao3.classList.remove("escondido");
  online1.textContent = "online"
  
}, 14000);
setTimeout(function(){
online1.textContent = "Digitando..."}, 10000)
}
// digitando aos 10 segundos
// aos 14 segundos aparece o chat

function balaoquatro(){
  setTimeout(function(){
  balao4.classList.remove("escondido");
  online2.textContent = "online"
  
}, 22000);
setTimeout(function(){
online2.textContent = "Digitando..."}, 16000)
}
// digitando aos 16 segundos
// aos 22 segundos aparece o chat
function balaocinco(){
  setTimeout(function(){
  balao5.classList.remove("escondido");
  online1.textContent = "online"
  
}, 30000);
setTimeout(function(){
online1.textContent = "Digitando..."}, 22000)
}
// digitando aos 22 segundos
// aos 30 segundos aparece o chat
function balaoseis(){
  setTimeout(function(){
  balao6.classList.remove("escondido");
  online2.textContent = "online"
  
  
}, 38000);
setTimeout(function(){
online2.textContent = "Digitando..."}, 31000);
setTimeout(function(){
  seta.classList.remove("escondido");}, 44000)
}

// digitando aos 28 segundos
// aos 38 segundos aparece o chat


// 2° CHAT 

seta.addEventListener('click', function(){
  balao1.classList.add("escondido");
  balao2.classList.add("escondido");
  balao3.classList.add("escondido");
  balao4.classList.add("escondido");
  balao5.classList.add("escondido");
  balao6.classList.add("escondido");
  seta.classList.add("escondido");
})


