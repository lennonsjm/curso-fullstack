const formulario = document.getElementById("meuFormulario");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    
    
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const sexo = document.getElementById("sexo");
    const checkbox = document.getElementById("s");

//validação
    if(nome.value.trim() === ""){ // trim remove os espaços
        alert("Preencha o nome");
        return false;
    }

    if(telefone.value.trim() === "" ){
        alert("Preencha o telefone");
        return false;
    }


// Limpar campos
nome.value = "";
telefone.value = "";
checkbox.checked = false;
email.value = "";


    //limpar campos
    alert("Formulário enviado!");
});
