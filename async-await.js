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


const funcionAsincronaExpresada = async() => {

    try {
        
        console.log("Inicio de la async function");


        let obj = await cuadradoPromise(2);
        console.log(`El valor ${obj.value} al cuadrado es ${obj.result}`);

        obj= await cuadradoPromise(4);
        console.log(`El valor ${obj.value} al cuadrado es ${obj.result}`);

        obj= await cuadradoPromise("4");
        console.log(`El valor ${obj.value} al cuadrado es ${obj.result}`);


        console.log("Fin de async function")
    
    } catch (error) {

        console.log(error)
        
    }

};


funcionAsincronaExpresada();
