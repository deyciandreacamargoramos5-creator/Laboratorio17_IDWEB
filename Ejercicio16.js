function ProcesarNumeroPromesa(numero) {
  const tiempoEspera = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
  return new Promise((resolve) => {
    console.log("Procesando " + numero + "..." + " (espera: " + tiempoEspera + "ms)");
    setTimeout(() => {
      resolve();
    }, tiempoEspera);
  });
}
function ProcesarListaPromesa(lista) {
  let cadena = Promise.resolve();

  lista.forEach((numero) => {
    cadena = cadena.then(() => {
      return ProcesarNumeroPromesa(numero);
    });
  });
  return cadena.then(() => "Proceso completado");
}
const numerosP = [5, 12, 8];
console.log("Iniciando procesamiento de lista:", numerosP);

ProcesarListaPromesa(numerosP)
  .then((mensajeFinal) => {
    console.log("--", mensajeFinal);
  })
  .catch((error) => {
    console.error("Hubo un error grave:", error);
  });