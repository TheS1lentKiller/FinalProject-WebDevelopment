function ocultarMostrar(txt) {
    var display = document.getElementById(txt).style.display;
    if(display == "none")
        document.getElementById(txt).style.display = 'block';
    else
        document.getElementById(txt).style.display = 'none';
}