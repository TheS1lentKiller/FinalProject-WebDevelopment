function inverter(){
    let nomes = [];

    var nome1 = document.getElementById("nome1").value;
    var nome2 = document.getElementById("nome2").value;
    var nome3 = document.getElementById("nome3").value;
    var nome4 = document.getElementById("nome4").value;
    var nome5 = document.getElementById("nome5").value;

    if (nome1.value != '' && nome2.value != '' && nome3.value != '' && 
    nome4.value != '' && nome5.value != ''){
        nomes.push(nome1,nome2,nome3,nome4,nome5);

        document.getElementById("nome1").value = nome5;
        document.getElementById("nome2").value = nome4;
        document.getElementById("nome3").value = nome3;
        document.getElementById("nome4").value = nome2;
        document.getElementById("nome5").value = nome1;

    }else {
        alert("Preencha todos os campos para prosseguir.")
    }
}