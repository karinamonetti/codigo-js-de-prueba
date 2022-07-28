let set = new Set( [1, 2, 3, 4, 5, 6, 6, true, "hola", "HOLA"] );
console.log(set);
set.delete("HOLA");
console.log(set);
console.log( set.has("HOLA") );


let set2 = new Set();
set2.add("true");
set2.add("true");
set2.add(2);
set2.add(true);
console.log(set2)
console.log(set2.size)


for (item of set2) {
    console.log(`El item es: ${item}`)
}


set2.forEach( item => console.log(item) );


let set2ToArray = Array.from(set2);
console.log(set2ToArray);
console.log( set2ToArray[2] );
console.log(set2ToArray.length);
set2.clear(); 
console.log(set2);


