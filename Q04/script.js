function confirmar(){
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var email1 = document.getElementById("email1");
    var email2 = document.getElementById("email2");
    var senha = document.getElementById("senha");
    var dia = document.getElementById("dia");
    var mes = document.getElementById("mes");
    var ano = document.getElementById("ano");
    var sexo = document.getElementById("sexo");

    var anoT = document.getElementById("anoPri");
    
    if (nome.value != '' && sobrenome.value != '' && email1 != '' && email2 != '' && senha != '' &&
    dia != 'Dia' && mes.value != anoT && ano.value != anoT  && sexo.checked){
        alert("Dados registrados com sucesso!");
    }else if (email1.value != email2.value){
        alert("O email/número de telefone informado não confere.")
    }else{
        alert("Preencha todos os campos para prosseguir.")
    }
}