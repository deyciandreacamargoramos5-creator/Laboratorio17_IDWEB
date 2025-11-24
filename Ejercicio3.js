function ErrorProvocado(){
try{
    console.log(c);
}catch (error){
    console.log("Fallo la ejecución");
}finally{
    console.log("Siempre se ejecuta al final");
    }
}