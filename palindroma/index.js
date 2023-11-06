// Funzione parola_al_contrario
function parola_al_contrario(parola){
    let parolaAlContario = "";
    for(let i=parola.length-1; i>=0; i--){
        parolaAlContario = parolaAlContario + parola[i];
    }
    return parolaAlContario;
}
// Funzione is_palindroma
function is_palindroma(parola, parola_al_contrario){
    let isPalindroma;
    if(parola==parola_al_contrario){
        isPalindroma = true;
    }else{
        isPalindroma = false;
    }
    return isPalindroma;
}
// Btn verifica click
const verifica = document.getElementById("verifica");
verifica.addEventListener("click", function(){
    // Input parola e risultato
    const parola = document.getElementById("parola").value;
    const risultato = document.getElementById("risultato");
    // Verifica che l'input non sia vuoto
    if(parola!=""){
        // Svuota input
        document.getElementById("parola").value = "";
        // Invoca funzione parola_al_contrario
        const parolaAlContrario = parola_al_contrario(parola);
        // Invoca funzione is_palindroma
        const isPalindroma = is_palindroma(parola, parolaAlContrario);
        // Manda a schermo il risultato
        risultato.innerHTML = isPalindroma;
    }else{
        risultato.innerHTML = "Errore. Inserisci una parola";
    }
})