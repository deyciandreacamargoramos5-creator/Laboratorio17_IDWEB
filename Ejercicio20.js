function procesarNumeroPromise(numero) {
  const tiempoEspera = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
  return new Promise((resolve) => {
    console.log("Procesando" + numero + "...");
    setTimeout(() => {
      resolve(); 
    }, tiempoEspera);
  });
}

async function Ejercicio20_async_await(lista) {
  console.log("Iniciando procesamiento de lista:", lista);
  try {
    for (const numero of lista) {
      await procesarNumeroPromise(numero);
    }
    console.log("Proceso completado");
  } catch (error) {
    console.error("Hubo un error durante el procesamiento:", error);
  }
}
const numerosParaProcesar = [5, 12, 8];
Ejercicio20_async_await(numerosParaProcesar);