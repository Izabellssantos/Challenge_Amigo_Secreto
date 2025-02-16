
 // Criar variavel para armazenar os nomes
 let amigos = []; 
 // Função adicionar amigos 
 function adicionarAmigo() {
     let input = document.getElementById("amigo");
     // Captura e remove espaços extras
     let nome = input.value.trim(); 
     
     if (nome === "") {
         alert("Por favor, insira um nome.");
         return;
     }
     // Adiciona ao array
     amigos.push(nome); 
     // Atualiza a lista na interface
     atualizarLista();
     // Limpa o campo de entrada
     input.value = ""; 
 }

function atualizarLista() {
     let lista = document.getElementById("listaAmigos");
     // Limpa a lista antes de atualizar
     lista.innerHTML = ""; 
     
     amigos.forEach((amigo, index) => {
         let li = document.createElement("li");
         li.textContent = amigo;
         lista.appendChild(li);
     });
 }

function sortearAmigo() {
     if (amigos.length === 0) {
         alert("A lista está vazia. Adicione pelo menos um nome.");
         return;
     }
     // Gera índice aleatórios 
     let indiceSorteado = Math.floor(Math.random() * amigos.length); 
     let amigoSorteado = amigos[indiceSorteado];
     
     let resultado = document.getElementById("resultado");
     resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
 }

