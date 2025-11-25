function cargarMensajePromise() {
    const tiempoEspera = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("El mensaje ha sido cargado después de " + tiempoEspera + "ms"); 
        }, tiempoEspera);
    });
}
async function CargarMensaje_async_await(){
    try {
        const mensaje = await cargarMensajePromise();
        console.log("--", mensaje); 
    } catch (error) {
        console.error("Error en E17:", error);
    }
}
console.log("Solicitando mensaje...");
CargarMensaje_async_await();