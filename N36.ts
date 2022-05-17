
let x:number=+prompt("Inserisci un numero X");
let array=[];
let contatore=0;

for (let i=0; i<=9; i++) {
    let k=+prompt("Inserisci un numero");
    array.push(k);
    if (k%x==0) {
       contatore++;

    }
    else {
        array.push(k);
        continue;
        
    }
}
if (contatore==0) {
    alert("OK");
}
else {
    alert("NO");
}