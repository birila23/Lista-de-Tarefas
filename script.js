const inputNovaTarefa = document.getElementById('caixaDeTexto');
const botao = document.getElementById('botao');
const adicionarLista = document.getElementById('lista');

function adicionarTarefa(tarefa){
    let novaTarefa = document.createElement("li");
    novaTarefa.innerHTML = tarefa;
    adicionarLista.appendChild(novaTarefa);

    let span = document.createElement("span");
    span.innerHTML = "X";
    novaTarefa.appendChild(span);
        
    saveData();
}

botao.addEventListener("click", () =>{
    let tarefa = inputNovaTarefa.value;
    if (tarefa === ""){
        alert("Adicione uma tarefa!");
        return
    }
    adicionarTarefa(tarefa);
    inputNovaTarefa.value = "";
});

adicionarLista.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", adicionarLista.innerHTML);
}
function mostraLista(){
    adicionarLista.innerHTML = localStorage.getItem("data");
}
mostraLista();