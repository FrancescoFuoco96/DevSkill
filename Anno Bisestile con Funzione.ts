function bisestile() {
    if (anno%400 ==0 || anno%4 ==0 && anno%100 !=0) {
        alert("L'anno inserito è BISESTILE");
    }

    else {
        alert("L'anno inserito NON è BISESTILE");
    }
}

let anno:number= prompt("Inserisci un anno qualsiasi");

bisestile();
