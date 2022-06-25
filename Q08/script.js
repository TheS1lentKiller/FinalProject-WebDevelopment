var btn1 = document.getElementById("red");
var btn2 = document.getElementById("green");
var btn3 = document.getElementById("blue");
var btn4 = document.getElementById("yellow");

function mudarCor(cor){
    document.body.style.background = cor;
}

function btnRed(event){
    mudarCor("red");
    event.preventDefault()
}

function btnGreen(){
    mudarCor("green");
}

function btnBlue(){
    mudarCor("blue");
}

function btnYellow(){
    mudarCor("yellow");
}