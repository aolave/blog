const formPalindromo = document.querySelector("#palindromo");
if (formPalindromo != null) {
    formPalindromo.addEventListener("submit", function (e) {
        // stop form submission
        e.preventDefault();
        // get input value
        let text = formPalindromo.textpalindrome.value;
        //alert( palindrome(text));
        addtext(palindrome(text));
    });
}

function palindrome(str) {
    const newStr = str.replace(/[\W_]/g, '').toLowerCase();
    const strReversed = newStr.split('').reverse().join('');
    return newStr === strReversed ? 'Es Palindromo' : 'No Es Palindromo'

}

function addtext(text) {
    var paragraph = document.getElementById("card-result");
    paragraph.textContent = text;
}

const mayor = document.querySelector("#menor");
if (mayor != null) {
    mayor.addEventListener("submit", function (e) {
        // stop form submission
        e.preventDefault();
        // get input value
        let text1 = mayor.num1.value;
        let text2 = mayor.num2.value;
        // alert
        addtext(resultado(text1, text2));
    });
}

// aca escribims nuestra funcion resultado para saber si un numero es mayor o menor que otro

function resultado(num1, num2) {
    if (num1 > num2) {
        return num1 + " Es Mayor que " + num2;
    } else if (num1 < num2) {
        return num1 + " Es Menor que " + num2;
    } else {
        return num1 + " Es Igual que " + num2;
    }
}