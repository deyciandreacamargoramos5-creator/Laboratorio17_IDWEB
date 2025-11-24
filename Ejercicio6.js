function ValidarEdad(){
    const edad= -5;
    try{
        if (typeof edad !== "number" || isNaN(edad)){
            throw new Error ("Edad invalida");
        }
        if (edad < 0){
            throw new Error ("La edad no puede ser negativa");
        }
        console.log ("Edad valida: " + edad);
    }catch (e){
        console.error("ERROR ENCONTRADO");
        console.error(e.name + " : " + e.message);
    }
}