let contador = 0;
let input= document.getElementById('inputTarefa');
let btnAdd= document.getElementById('btn-add');
let main = document.getElementById('areaLista');


function addTarefa ()  {
    //pegar o valor digitado no input aaaa
    let valorInput = input.value;

    //se não for vazio, nem nulo, nem indefinido

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !==undefined)) {
    
        ++contador;

            let novoItem = `<div id = "${contador}" class="item">
            <div onclick="marcarTarefa(${contador})"
            class="item-icone">
            <i id = "icone_${contador}"class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class=" item-nome"> ${valorInput}</div>
        <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i></button>
        </div>
     </div>`;
     // PSSEI HORAS NESSE PROBLEMA, O VALOR NÃO APERECIA, ERA ERRO DE SINTAXEEEEE :(
   
         
     //ADICIONAR NOVO ITEM NO MAIN ( LISTA)
     main.innerHTML+= novoItem

     //ZERAR OS CAMPINHOS, para quando escrever nvamente estar limpo
     input.value= "";
     input.focus();
    }
        
 }

    function deletar(id) {
        var tarefa = document.getElementById(id);
        tarefa.remove ();
    }



    function marcarTarefa(id) {
        var item =  document.getElementById(id);
        var classe = item.getAttribute ("class");
        console.log(classe);

        if (classe=="item") {
            item.classList.add("clicado");
            

            var icone = document.getElementById("icone_"+ id);
            icone.classList.remove("mdi-circle-outline");
            icone.classList.add("mdi-check-circle");

            item.parentNode.appendChild(item);
            //para colocar meu item feito no final

        } else {
            item.classList.remove("clicado");
        
        var icone = document.getElementById("icone_"+ id);
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");


        }
    }

input.addEventListener("keyup", function(event){
    //se teclou enter (13) porque cada tecla tem um número :O
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})
    