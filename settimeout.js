( () => {

    console.log("Código asíncrono");
    console.log("Inicio");


    function dos() {

        setTimeout( () => {

            console.log("Dos");

        }, 1000)
        

    }


    function uno() {

        setTimeout( () => {

            console.log("Uno");

        }, 0)
        
        dos();
        console.log("Tres");

    }


    uno();


    console.log("Fin");


})();