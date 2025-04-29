function valorRandomico(){
    let digitoInformado = document.getElementById("campo").value;
    let valorAleatorio = Math.floor(Math.random() * 10);

    if (digitoInformado == valorAleatorio){
        document.body.innerHTML += "<p>Voce acertou o numero!!</p>";
    } else{
        document.body.innerHTML += `<p>Voce errou o numero aleatorio era ${valorAleatorio}, tente novamente!</p>`;
} 
    }
function caixaAlta(){
    let textoUsuario = document.getElementById("caixaAlta").value;
    textoFormatado= textoUsuario.toUpperCase();

    
    document.getElementById("caixaAlta").value = textoFormatado; 
}
function Lista(){
        const texto = document.getElementById("novaTarefa").value;
  
        const li = document.createElement("li");
  
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onchange = function () {
          if (this.checked) {
            span.classList.add("concluida");
          } else {
            span.classList.remove("concluida");
          }
        };
  
        const span = document.createElement("span");
        span.textContent = " " + texto;
  
        li.appendChild(checkbox);
        li.appendChild(span);
  
        document.getElementById("listaTarefas").appendChild(li);
        document.getElementById("novaTarefa").value = "";
      }
      function confirmarEscolha() {
        const personagemEscolhido = document.querySelector('input[name="personagem"]:checked');

        if (personagemEscolhido) {
            const personagem = personagemEscolhido.value;
            let mensagem = "";

            switch(personagem) {
                case "Mago":
                    mensagem = "Você escolheu ser um Mago! Prepare-se para lançar feitiços!";
                    imagem = "<img src='mago.jpg' alt='Mago'/>"
                    break;
                case "Guerreiro":
                    mensagem = "Você escolheu ser um Guerreiro! Prepare-se para batalhas épicas!";
                    imagem = "<img src='Guerreiro_Do_Fronte.webp' alt='Guerreiro'/>"
                    break;
                case "Arqueiro":
                    mensagem = "Você escolheu ser um Arqueiro! Prepare-se para acertar alvos distantes!";
                    imagem = "<img src='arqueiro.jpg' alt='Arqueiro' />";
                    break;
            }
    
            const mensagemElement = document.getElementById("mensagem");
            mensagemElement.innerHTML = mensagem + imagem; 
        }
    }