//Input utente
    let numero1 = parseInt(prompt("Inserisci il primo numero."));
    let numero2 = parseInt(prompt("Inserisci il secondo numero."));
//Calcoli
    if (numero1 > numero2){
        alert("Il numero più grande è:" + " " + numero1);
    } else if (numero2 > numero1) {
        alert("Il numero più grande è:" + " " + numero2);
    } else {
        alert("I due numeri sono uguali");
    }
    