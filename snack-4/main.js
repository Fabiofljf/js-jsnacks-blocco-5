//Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro

//es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

//definiamo prima array

//definire secondo array

//cicleare nel primo array

//pushare l'elemento in una nupva array

//selezionare elemento dalla seconda array

//pusharlo nella array nuova

const numeri1 = [1, 2, 3];
const lettere1 = ['a', 'b', 'c']

/**
 * 
 * @param {array} array1 
 * @param {array2} array2 
 */
function getArray(array1, array2) {
    newArray = []
    if (array1.length === array2.length) {
        array1.forEach((element, index) => {
            newArray.push(element)
            newArray.push(array2[index])
        })
        return newArray
    }
}

console.log(getArray(numeri1, lettere1));