function CargarMensajePromesa(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Mensaje cargado");
        }, 1000);
    });
}
CargarMensajePromesa()
    .then(msg => {
        console.log("Promesa - Mensaje impreso:", msg);
    });