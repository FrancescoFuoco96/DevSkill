let parola:string=prompt("inserisci una parola");
let parola2:string=prompt("inserisci una parola");

let parola3 = parola + parola2.split('').reverse().join(''); 


console.log(parola3);