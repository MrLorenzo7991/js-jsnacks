//Invitati
    let invitati = ["sofia", "giulia", "aurora", "ginevra", "alice", "beatrice", "emma", "giorgia", "vittoria", "matilde", "leonardo", "francesco", "alessandro", "lorenzo", "mattia", "tommaso", "gabriele", "andrea", "riccardo", "edoardo"];
//Input utente
    let nomeUtente = prompt("Inserisci il tuo nome per controllare se puoi partecipare alla festa del Grande Gatsby").toLowerCase();
    console.log(nomeUtente);
//Controllo presenza
    let flag = false
    for(i = 0; i < invitati.length; i++){
        if(nomeUtente == invitati[i]){
            flag = true;
            break;
        }
    }
//Visualizzazione risultato
    if (flag){
        alert("Puoi partecipare alla festa del Grande Gatsby");
    } else {
        alert("Non puoi partecipare alla festa del Grande Gatsby")
    }