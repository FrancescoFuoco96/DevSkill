let input:number = prompt ("Inserisci un numero")*1;

let min:number=input;


while (input!= -1) {

    if (input<min) {
        min=input;
    }
    input=prompt("Inserisci un numero"); 
}
if (min!=-1) {
    alert("Il numero minore è " +min);
}