function ErrorProvocado(){
    try{
        let edad= -5;
        if(edad < 0){
            throw new Error("La edad no ser un número negativo.");
        }
        console.log("L edad es valida");
    }catch (e){
        console.log("Error de validación");
        console.log(e.message);
    }
}