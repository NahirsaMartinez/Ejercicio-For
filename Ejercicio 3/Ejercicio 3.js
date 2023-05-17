const h2Resultado = document.querySelector ("#resultado");
const inputRecibirSaludo = document.querySelector ("input");

function generarSaludo(){

    let numeroIngresado = inputRecibirSaludo.value;

    for (let i = 0; i <= numeroIngresado; i++) {
        h2Resultado.innerHTML += (`hola ${i} <br>`);
        
    }
}