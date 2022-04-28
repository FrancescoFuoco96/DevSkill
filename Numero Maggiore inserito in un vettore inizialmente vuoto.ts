let input:number= + prompt("Inserisci un numero")*1; 

let max:number=input;

for (let i=0; i<9; i++) {

    if (input>max) {
        max=input;
    }
    input= + prompt ("Inserisci un numero");
}

alert("Il numero Maggiore è: " +max);