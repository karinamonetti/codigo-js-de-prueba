const cuadradoPromise = (value) => {


    if (typeof value !== "number") {

        return Promise.reject("Error: el valor ingresado no es un número")

    };


    return new Promise((resolve, reject) => {
        
        setTimeout( () => {

            resolve({

                value,
                result: value*value

            });
    
        }, 2000 | Math.random () * 100);

    });


};

cuadradoPromise(3)
    .then( obj => {

        console.log(`La promesa nos da que ${obj.value} es igual a ${obj.result}`);
        return cuadradoPromise("Hola");

    })
    .then( obj => {

        console.log(`La promesa nos da que ${obj.value} es igual a ${obj.result}`);

    })
    .catch(err => console.error(err));