
//Input Utente
    let numeroUtente = parseInt(prompt("scegli il numero fino alla quale vuoi sapere il cubo dei numeri naturali che lo precedono"));
    let cubo = cuboDeiPrimiNumeriN(numeroUtente);
    alert(cubo);

//Funzione 
function cuboDeiPrimiNumeriN(N){
    let cuboDeiNumeri =[]
    for(i = 0; i < N; i++){
        cuboDeiNumeri[i] = (i+1)**3;
       ;
    }
    return(cuboDeiNumeri)
}