function* iterable () {

    console.log("comienzo")
    yield "hola"
    console.log("hola consola")
    yield "hola 2"
    console.log("seguimos")
    yield "hola 3"
    yield "hola 4"


}

let iterador = iterable(); 

for (y of iterador) {
    console.log(y)
}

const arr = [...iterable()];  //guarda los yield solamente
console.log(arr)






function cuadrado (valor) {

    setTimeout(() => {

        return console.log({valor, resultado: valor*valor})

    }, 1000)

}


function* generador () {

    console.log("Inicia generador")
    yield cuadrado(0)
    yield cuadrado(1)
    yield cuadrado(2)
    yield cuadrado(3)
    console.log("Termina generador")

}


let gen = generador();

for (let y of gen) {
    
    console.log(y)

}