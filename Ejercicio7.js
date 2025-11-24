function ProvocarUnTypeError(){
    try{
        let x =null;
        console.log(x.nombre);
    }catch(e){
        if(e instanceof TypeError){
            console.log("Error de TypeError encontrado");
            console.log("Motivo: Accediste a una propiedad de null o undefined");
            console.log("Nombre del error: " + e.name);
            console.log("Mensaje:" + e.message);
        }else{
            console.log("se encontro un error de tipo diferente: " + e.name);
        }
    }
}