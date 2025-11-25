function Ejercicio12(){
function ProcesarElemento(numero, callback) {
    const tiempoAleatorio = Math.random() * (1500 - 500) + 500;
    setTimeout(() => {
        console.log("Callback - Procesando " + numero + "...");
        callback(); 
    }, tiempoAleatorio);
}
function procesarLista(arreglo, callbackFinal) {
    let indice = 0;
    function siguienteElemento() {
        if (indice < arreglo.length) {
            ProcesarElemento(arreglo[indice], () => {
                indice++;
                siguienteElemento(); 
            });
        } else {
            callbackFinal("Proceso completado");
        }
    }
    siguienteElemento();
}
const listaNumeros = [2, 4, 6];
procesarLista(listaNumeros, (mensajeFinal) => {
    console.log("Callback - Proceso finalizado:", mensajeFinal);
});
}