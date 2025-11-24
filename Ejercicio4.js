function GenerarUnSyntaxError(){
    const textoInvalido = "{clave: valor }";
    console.log("Analizando el texto invalido");
    try{
        const objeto = JSON.parse(textoInvalido);
    }catch(e){
        console.log("Se encontro un error");
        console.log("e.name:", e.name);
        console.log("e.message:", e.message);
    }
}