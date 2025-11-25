function CargarUsuario(callback){
    const tiempoAleatorio = Math.random() * (1500 - 800) + 800;
    setTimeout(() =>{
        const usuario = {id: 1, nombre: "Juancito"};
        const mensaje = "Usuario cargado: " + usuario.nombre + "(ID:" + usuario.id + ")";
        if (typeof callback === "function"){
            callback(mensaje);
        }
    }, tiempoAleatorio);
}
    CargarUsuario((msg) =>{
        console.log("Callback - ", msg)
    });