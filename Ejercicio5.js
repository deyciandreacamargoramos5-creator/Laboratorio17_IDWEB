function ErrorCualquiera(){
    try{
        console.log(null.propiedad);
    }catch (error){
        console.log("fallo");
    }finally{
        console.log("Siempre se ejecuta");
    }
}