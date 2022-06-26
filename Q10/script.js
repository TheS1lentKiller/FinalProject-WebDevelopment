var n1 = document.getElementById("nome1");
var n2 = document.getElementById("nome2");
var n3 = document.getElementById("nome3");
var n4 = document.getElementById("nome4");
var n5 = document.getElementById("nome5");

var nomes = [n1, n2, n3, n4, n5];

var x = nomes[4];

function tamanho(){
    document.getElementById("paragraph").innerHTML = x;
}