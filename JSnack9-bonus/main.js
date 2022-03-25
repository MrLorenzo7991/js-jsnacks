function mediaAritmetica(numeriUtente){
    let sommaNumeriUtente = 0;
    for(i=0; i < (numeriUtente.length); i++){
        sommaNumeriUtente = sommaNumeriUtente + numeriUtente[i];
    }
    let media = sommaNumeriUtente/numeriUtente.length
    return(media);
}

let numeriDaFareLaMedia =[2, 54, 12, 52, 7, 64, 10, 11, 9, 31];
alert(mediaAritmetica(numeriDaFareLaMedia));