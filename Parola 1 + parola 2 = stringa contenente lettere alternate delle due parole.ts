let parola = prompt("Inserisci la prima Parola");
let parola2 = prompt("Inserisci la seconda Parola");
let parolaElaborata:string="";

for (let i = 0; i != parola.length; i++) {
    if (i % 2 == 0) {

        parolaElaborata = parolaElaborata.concat(parola.charAt(i));        
    }
    else {
        parolaElaborata = parolaElaborata.concat(parola2.charAt(i));

    }

}

console.log(parolaElaborata);