//Input Utente
    let numeriDispari = [];
    let posizione = 0;
    for(i = 0; i < 6; i++){
        numeroUtente = prompt("Inserisci il " + (i+1) +"° numero")
        if (numeroUtente %2 != 0){
            numeriDispari [posizione] = numeroUtente;
            posizione++;
        }
    }
    alert("I numeri dispari sono:" + numeriDispari);