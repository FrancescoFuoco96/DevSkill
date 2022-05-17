let x:number=+prompt("Inserisci un numero intero X");
let n:number=+prompt("Inserisci un numero intero N");
let cont="";

for (let i=0; i<=6; i++) {
     let k:number=+prompt("Inserisci un numero intero");
     if (k%2==0 && k<x) {
         cont=cont+k;
     }
     else {
         continue;
     }

}

console.log(cont);