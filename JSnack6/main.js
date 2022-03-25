//scelta numero coputer
    let numeroComputer = Math.floor(Math.random()*10);
////
    let flag = false;
    while (!flag){
        let numeroUtente = prompt("Ho scelto un numero compreso fra 1 e 10, cerca di inovinarlo!");
            if(numeroUtente == numeroComputer){
                alert("Bravo! Hai Indovinato!");
                flag = true;
            } else {
                alert("Peccato, non hai indovinato. Riprova!");
            }
    }
