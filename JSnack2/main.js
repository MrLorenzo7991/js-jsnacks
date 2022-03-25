//Input utente
    let parola1 = prompt("Inserisci la prima parola");
    let parola2 = prompt("Inserisci la seconda parola");
    let lunghezzaParola1 = parola1.length;
    let lunghezzaParola2 = parola2.length;
//Elaborazione input
    if (lunghezzaParola1 >= lunghezzaParola2) {
        alert(parola2 + " " + parola1);
    } else {
        alert(parola1 + " " + parola2);
    }