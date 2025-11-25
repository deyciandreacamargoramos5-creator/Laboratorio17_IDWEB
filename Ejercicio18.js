function CargarUsuarioPromise() {
    const tiempoEspera = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("(Simulación de carga: "  + tiempoEspera + "ms)");
            resolve({ id: 101, nombre: "Alicia" }); 
        }, tiempoEspera);
    });
}
async function CargarUsuario_async_await(){
    try {
        const usuario = await CargarUsuarioPromise();
        const mensajeFormateado = "Usuario cargado: " + usuario.nombre + " (ID:" + usuario.id + ")";
        console.log(mensajeFormateado); 
    } catch (error) {
        console.error("Error en E18:", error);
    }
}
console.log("Solicitando usuario...");
CargarUsuario_async_await();