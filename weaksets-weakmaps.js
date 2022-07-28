const ws = new WeakSet();
let valor1= {"valor1" : 1}
let valor2= {"valor2" : 2}
let valor3= {"valor3" : 3}
ws.add(valor1);
ws.add(valor2);
ws.add(valor3);
console.log(ws)

console.log(ws.has(valor3))

// ws.delete(valor3)
// console.log(ws)

setInterval( () => console.log(ws), 1000);
setTimeout( () => {

    valor1 = null;
    valor2 = null;
    valor3 = null;

}, 5000)
