let input:number = prompt("Inserisci un numero")*1;

let max=input;

while (input!=-1) {

    if (input>max) {
        max=input;
    }
      input = prompt("Inserisci un numero")*1;
}
    if (max!=-1) {
        alert("Il numero Maggiore è " +max);
    }