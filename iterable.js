const iterable = [1,2,3,4,5];

// Accedo al iterador del iterable 
const iterador = iterable[Symbol.iterator]();


console.log(iterable);
console.log(iterador)


//console.log(iterador.next())   valor, el segundo valor (done) indica si ya se acabaron los elementos del iterable
//lo ejecuto, con .next() 
let next = iterador.next();

//lo ejecuto eficientemente 
while (!next.done) {
    console.log(next.value)
    next = iterador.next();
}