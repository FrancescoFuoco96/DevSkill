let stringa:string=prompt("inserisci una parola");

let stringaInversa = stringa.split('').reverse().join(''); 

if (stringa==stringaInversa) {
    alert("La parola " +stringa +" è Palindroma");
}
else {
    alert("La parola " +stringa +" non è Palindroma");
}