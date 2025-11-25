function DividirAsyncPromesa(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                reject(new Error("No se puede dividir entre cero"));
            } else {
                const resultado = a / b;
                resolve(resultado);
            }
        }, 1500);
    });
}
DividirAsyncPromesa(20, 4)
    .then(resultado => {
        console.log("Promesa - Resultado: ", resultado);
    })
    .catch(error => {
        console.error("Promesa - Error:", error.message);
    });
DividirAsyncPromesa(20, 0)
    .then(resultado => {
        console.log("Promesa - Resultado: ", resultado);
    })
    .catch(error => {
        console.error("Promesa - Error: ", error.message);
    });