alert("Benvenuti nel Convertitore Online di Unità di misura!");

function menu(){
let risultato:number;
let unitadimisura:number= prompt ("Digitare 1 per convertire una Temperatura  o 2 per convertire una Distanza");
                
                if (unitadimisura==1) {  
                    
                    let gradi:number= prompt ("Digitare 1 per convertire Gradi Centigradi o 2 per convertire Gradi Fahrenheit");
                   
                     if (gradi==1) {
                             let valoreTC:number = prompt("Inserisci il valore in °C");
                             risultato= (valoreTC*9) / 5 + 32;
                             alert(valoreTC+"°C corrispondono a "+risultato+"°F");


                     }
                     else if (gradi==2) {
                             let valoreTF:number = prompt("Inserisci il valore in °F");
                             risultato= (valoreTF-32)*5 / 9;
                             alert(valoreTF+"°F corrispondono a "+risultato+"°C");
                     } 

                    
                }
                else if (unitadimisura==2) {
                    let distanza:number = prompt("Digitare 1 per convertire KM o 2 per convertire MI");

                        if (distanza==1) {
                            let valoreKM:number = prompt("Inserisci il valore in KM");
                            risultato=valoreKM/1.609;
                            alert(valoreKM+"KM corrispondono a "+risultato+"MI");

                        }

                        if (distanza==2) {
                            let valoreMI:number = prompt("Inserisci il valore in MI");
                            risultato=valoreMI*1.609;
                            alert(valoreMI+"MI corrispondono a "+risultato+"KM");
                        }

                }               

}


menu();