let mapa = new Map();
mapa.set("nombre", "karina");
mapa.set("edad", 27);
console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));
// mapa.delete("edad");
// console.log(mapa);

mapa.set(19,19)
mapa.set(false,"falso")
for (let [propiedad, valor] of mapa) {
    console.log(`Propiedad: ${propiedad} Valor: ${valor}`)
}

const llaveMapa = [...mapa.keys()];
const valorMapa = [...mapa.values()];
console.log(llaveMapa,valorMapa)