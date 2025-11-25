function CargarUsuarioPromesa(){
    const tiempoAleatorio = Math.random() * (1500 - 800) + 800;
    return new Promise((resolve) => {
        setTimeout(() => {
            const usuario = { id: 2, nombre: "Pablito" };
            const mensaje = "Usuario cargado: " + usuario.nombre + "(ID:" + usuario.id + ")" + "(Promesa)";
            resolve(mensaje); 
        }, tiempoAleatorio);
    });
}
CargarUsuarioPromesa()
    .then(msg => {
        console.log("Promesa -", msg);
    });