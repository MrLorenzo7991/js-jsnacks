//Input Utente
    let numeriUtente = [];
    for(i = 0; i < 10; i++){
        numeriUtente[i] = parseInt(prompt("Inserisci Il tuo " + (i+1) + "°" + " numero"));
    }
//Somma Numeri
    let sommaNumeriUtente = 0;
    for(i=0; i < (numeriUtente.length); i++){
        sommaNumeriUtente = sommaNumeriUtente + numeriUtente[i]
        console.log(sommaNumeriUtente);
    }
//Controllo Numeri e Visualizzazione risultato
    if (isNaN(sommaNumeriUtente)){
        alert("Seleziona tutti numeri perfavore!")
    } else {
        alert("La somma dei tuoi numeri è: " + sommaNumeriUtente);
    }
