let a:number[]=[];
let b:number[]=[];
let c:number[]=[];

while (a.length<=4) {
        let n:number= prompt("Inserisci un numero")*1;
        a.push(n);  
        }

 while (b.length<=4) {       
        let k:number= prompt("Inserisci un numero")*1;
        b.push(k);    
        }

for (let i=0; i<=4; i++) {
        
        if (i%2==0) {
            c.push(a[i]);
        }
        else {
            c.push(b[i]);
        }

}


     console.log(c);