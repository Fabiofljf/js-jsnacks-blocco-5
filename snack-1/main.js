// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.

//Calcola quanto pesano tutte le zucchine.

const zucchine = [
    { tipo: 'faenza', peso: 25, lunghezza: '20' },
    { tipo: 'faenza', peso: 30, lunghezza: '12' },
    { tipo: 'faenza', peso: 26, lunghezza: '23' },
    { tipo: 'faenza', peso: 30, lunghezza: '32' },
    { tipo: 'faenza', peso: 13, lunghezza: '11' },
    { tipo: 'faenza', peso: 18, lunghezza: '17' },
    { tipo: 'faenza', peso: 12, lunghezza: '14' },
    { tipo: 'faenza', peso: 54, lunghezza: '34' },
    { tipo: 'faenza', peso: 11, lunghezza: '13' },
    { tipo: 'faenza', peso: 30, lunghezza: '15' },
]


let somma = 0;

zucchine.forEach(zucchina => {
    //console.log(zucchina);
    console.log(zucchina.peso) // - solo la misura di ogni zucchina.
    let peso = zucchina.peso
    somma += peso
    return somma

})

console.log(somma);