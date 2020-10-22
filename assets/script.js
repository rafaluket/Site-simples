//Aplica uma propriedade css (text-align) que centraliza o texto contido na div.
function centralizarTexto(id) {
    var idObj = document.getElementById(id);
    if (idObj.style.textAlign == "center") {
        idObj.style.textAlign = "left";
    } else {
        idObj.style.textAlign = "center";
    }
}