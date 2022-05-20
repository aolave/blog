// Escribe un programa que pida una frase y escriba cuántas veces aparecen cada 
// una de las vocales.
const vacales2 = document.querySelector("#form_vocales_b");

vacales2.addEventListener("submit", function (e) {
    // stop form submission
    e.preventDefault();
    // get input value
    let text = vacales2.textvocales2.value;
    contar(text);
});




// Capturas el valor del input, lo limpas de espacios al inicio y al final y luego haces un arreglo
function contar(texto) {
    let textv = "";

    let textov = vocales(texto);
   

    var cadena = textov.split('');
    var contador = {};
    cadena.forEach(function (valor) {
        if (contador[valor] === undefined) { contador[valor] = 1 } else { contador[valor] += 1 }
    });
    for (var clave in contador) {
        textv += clave + ': ' + contador[clave] + ' veces | ';
    }
    addtext(textv);
}


function addtext(text) {
    var paragraph = document.getElementById("card-result");
    paragraph.textContent = text;
}
