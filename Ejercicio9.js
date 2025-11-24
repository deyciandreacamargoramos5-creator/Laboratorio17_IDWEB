function CargarMensaje(callback) {
    setTimeout(() => {
        const mensaje = "Mensaje cargado";
        if (typeof callback === "function") {
            callback(mensaje); 
        } 
    }, 1000); 
}
CargarMensaje((msg) => {
    console.log("Callback - Mensaje impreso:", msg);
});