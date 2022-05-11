let array=[];


for (let i=0; i<=5; i++) {
    let input:number=+prompt("Inserisci un numero");
    array.push(input);
}

array.sort(function(a,b){return a-b});

console.log("Ordine Crescente "+array);

array.sort(function(a,b){return b-a});

console.log("Ordine Decrescente "+array);
