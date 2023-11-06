// Funzione numero_PC
function numero_PC(){
    return Math.trunc(Math.random() * 5 + 1);
}
// Funzione fun_somma
function fun_somma(numeroUtente, numeroPC){
    const somma = numeroUtente + numeroPC;
    return somma;
}
// Funzione pari_dispari
function pari_dispari(somma){
    let pariDispari;
    if(somma%2 == 0){
        pariDispari = "Pari";
    }else{
        pariDispari = "Dispari";
    }
    return pariDispari;
}
// Funzione fun_vincitore
function fun_vincitore(pariDispariSelect, pariDispari){
    let vincitore;
    if(pariDispariSelect==pariDispari){
        vincitore = "Utente";
    }else{
        vincitore = "PC";
    }
    return vincitore;
}
// Btn giochiamo click
const giochiamo = document.getElementById("giochiamo");
giochiamo.addEventListener("click", function(){
    // Input utente
    const pariDispariSelect = document.getElementById("pariDispariSelect").value;
    let numeroUtente = document.getElementById("numeroUtente").value;
    document.getElementById("numeroUtente").value = "";
    const risultato = document.getElementById("risultato");
    // Verifica che l'input non sia vuoto
    if(numeroUtente != ""){
        numeroUtente = parseInt(numeroUtente);
        // Verifica che l'input sia compreso fra 1 e 5
        if(numeroUtente >=1 && numeroUtente <= 5){
            // Invoca funzione numero_PC
            const numeroPC = numero_PC();
            // Invoca funzione fun_somma
            const somma = fun_somma(numeroUtente, numeroPC);
            // Invoca funzione pari_dispari
            const pariDispari = pari_dispari(somma);
            // Invoca funzione fun_vincitore
            const vincitore = fun_vincitore(pariDispariSelect, pariDispari);
            risultato.innerHTML = "Il vincitore è " + vincitore + ". Il numero estratto dal PC è stato " + numeroPC;
        }
        else{
            risultato.innerHTML = "Errore. Inserisci un numero compreso fra 1 e 5";
        }
    }else{
        risultato.innerHTML = "Nessun numero inserito. Inserisci un numero compreso fra 1 e 5";
    }
})