function vocales(str) {
    const newStr = str.replace(/[\W_]/g, '').toLowerCase();
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let resultado = '';
    for (let i = 0; i < newStr.length; i++) {
        if (vocales.includes(newStr[i])) {
            resultado += newStr[i] + '';
        }
    }
    return resultado;
}
