const cuadrado = (value, callback) => {

    setTimeout( () => {

        callback(value, value*value);

    }, 2000 | Math.random () * 100);

}

cuadrado(2, (value, result) => {

    console.log("Inicia callback");
    console.log(`Callback: ${value} al cuadrado es ${result}`);

    // Callback dentro de otra callback
    cuadrado(5, (value, result) => {

        console.log("Inicia callback");
        console.log(`Callback: ${value} al cuadrado es ${result}`);
    
    });

});