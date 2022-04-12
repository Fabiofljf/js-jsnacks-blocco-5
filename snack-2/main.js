// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

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

const zucchine15 = zucchine.filter((zucchina) => zucchina.lunghezza < 15)
console.log(zucchine15);

const zucchinePiu15 = zucchine.filter((zucchina) => zucchina.lunghezza > 15)
console.log(zucchinePiu15);

let somma = 0

zucchine15.forEach((zucchina15) => {
    somma += zucchina15.peso
})

console.log(somma);