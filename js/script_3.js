// controlamos el formulario de vocales
const form_vocales = document.querySelector("#for_vocales");
form_vocales.addEventListener("submit", function (e) {
    // stop form submission
    e.preventDefault();
    // get input value
    let text = form_vocales.textvocales.value;
    addtext(vocales(text));
});

function addtext(text) {
    var paragraph = document.getElementById("card-result");
    paragraph.textContent = text;
}