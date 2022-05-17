let n:number=+prompt("Inserisci N");
let maxCon=0;
let maxCon2=0;
let k=0;

while (k!=-1) {
    let z:number=+prompt("Inserisci un numero");
    k=z;
    if (z<=n) {
        maxCon++;

    }
    else {
        maxCon2=maxCon;
        maxCon=0;
    }
}

if (maxCon2>=n) {
    alert("OK");
}
else {
    alert("NO");
}
