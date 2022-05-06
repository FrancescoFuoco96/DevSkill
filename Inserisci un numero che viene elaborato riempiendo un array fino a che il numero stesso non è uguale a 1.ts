let input:number=+prompt("Inserisci un numero");
let stampa=[];
let numero=input;
let numeroelaborato:number;

stampa.push(input);

while (numero!=1) {
    if (numero%2==0) {
        numeroelaborato=numero/2;
        stampa.push(numeroelaborato);
        numero=numeroelaborato;
    }
    else 
    {
      numeroelaborato= (numero*3)+1;
      stampa.push(numeroelaborato); 
      numero=numeroelaborato; 
    }

}

console.log(stampa);