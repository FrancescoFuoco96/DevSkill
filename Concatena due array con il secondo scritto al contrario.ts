let a:number[]=[]; //creo il primo array
let b:number[]=[]; //creo il secondo array
let c:number[]=[]; //creo il terzo array

while (a.length<=4) {
        let n:number= prompt("Inserisci un numero")*1; //popolo il primo array
        a.push(n);  
        }

 while (b.length<=4) {       
        let k:number= prompt("Inserisci un numero")*1; //popolo il secondo array
        b.push(k);    
        }

for (let i=0; i<=4; i++){
    c.push(a[i]);
}

for (let i=4; i>=0; i--) {
        
      c.push(b[i]);

}

console.log(c);