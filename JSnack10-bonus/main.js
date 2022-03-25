function sommaCifre(numeroDiCuiSommareLeCifre){
    numeroDiCuiSommareLeCifre = parseInt(numeroDiCuiSommareLeCifre);
    if(numeroDiCuiSommareLeCifre.lenght == 4){
        let somma = 0;
        while (numeroDiCuiSommareLeCifre) {
            somma = somma + (numeroDiCuiSommareLeCifre % 10);
            numeroDiCuiSommareLeCifre = Math.floor(numeroDiCuiSommareLeCifre / 10);
        }
        return(somma);
    } else{
        alert("Devi scrivere un numero di 4 cifre!");
    }
}

let numeroUtente = prompt("Scrivi un numero di 4 cifre sommare le cifre");
alert(sommaCifre(numeroUtente));