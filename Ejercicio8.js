function ImprimirMensajeDeError(){
    function Nivel3(){ 
    try{
        throw new Error ("x is not defined");
    }catch (e){
        console.log("nivel 2 atrapó el error: " + e.message);
        throw e;
    }
}
function Nivel2(){
    try{
        Nivel3();
    }catch(e){
        console.log("NIvel 1 recibió el error: " + e.message);
        throw e;
    }
}
try{
    Nivel2();
}catch (e){
    console.log("ERROR FINAL CAPTURADO en el nivel superior: " + e.message);
    }
}