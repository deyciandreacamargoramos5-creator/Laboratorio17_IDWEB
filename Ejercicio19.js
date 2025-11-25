function dividirAsyncPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) {
        reject(new Error("No se puede dividir entre cero"));
      } else {
        resolve(a / b);
      }
    }, 1500);
  });
}
async function DividirAsync_async_await(a, b) {
  try {
    const resultado = await dividirAsyncPromise(a, b);
    console.log("Resultado de la división de " + a + "/" + b + ": " + resultado);
  } catch (error) {
    console.error("Error al dividir " + a + "/" + b + ": " + error.message);
  }
}
DividirAsync_async_await(10, 2); 
DividirAsync_async_await(10, 0);