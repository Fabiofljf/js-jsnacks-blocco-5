//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

function revString(parola) {
    return parola.split("").reverse().join("");
}

console.log(revString('ciao'));