function sommaNumeri(numeriUtente){
    let sommaNumeriUtente = 0;
    for(i=0; i < (numeriUtente.length); i++){
        sommaNumeriUtente = sommaNumeriUtente + numeriUtente[i];
    }
    return(sommaNumeriUtente);
}

let numeriDaSommare =[2, 54, 12, 52, 7, 64, 10, 11, 9, 51];
alert(sommaNumeri(numeriDaSommare));