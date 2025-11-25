function DividirAsync(a, b, callback){
    setTimeout(() =>{
        if(b === 0){
            callback(new Error("No se puede dividir entre 0"), null);
        }else{
            const resultado = a/b;
            callback(null, resultado);
        }
    }, 1500);
}
DividirAsync(10, 5, (error, resultado) =>{
if (error){
    console.error("Callback - Error: ", error.messge);
    return;
}
console.error("Callback - resultado: ", resultado);
});
DividirAsync(10, 0, (error, resultado) =>{
    if (error){
        console.error("Callback - Error: ", error.message);
        return;
    }
    console.log("Callback - Resultado: ", resultado);
});
