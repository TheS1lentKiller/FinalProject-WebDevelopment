function reset(){

    document.getElementById("nomeInpu").value = '';
    document.getElementById("sobrenomeInpu").value = '';
    document.getElementById("sexoSel").value = 'Escolha';
    document.getElementById("emailInpu").value = '';

}

function register(){

    if (
        document.getElementById("nomeInpu").value == "" ||
        document.getElementById("sobrenomeInpu").value  == "" ||
        document.getElementById("sexoSel").value == 'Escolha' ||
        document.getElementById("emailInpu").value == ""
    ){
        alert("Erro, preencha todos os campos para prosseguir.")
    }else{
        alert("Dados salvos com sucesso!")    
    }   
    
}

