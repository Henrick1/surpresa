var sla = document.getElementById("entrar").style.visibility = "hidden";

function entrar() {
    var confirmar = document.getElementById("data").value;
    console.log(confirmar)
    if (confirmar == 1901) {
        sla = document.getElementById("entrar").style.visibility = "visible";
    }
    else{
        sla = document.getElementById("entrar").style.visibility = "hidden";
    }
}