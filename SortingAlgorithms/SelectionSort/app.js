/**
 * function to sort array using selection sort
 * @param {array} array The array to sort
 * @returns sorted array
 */
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min != i) {
            [array[i], array[min]] = [array[min], array[i]];
        }
    }
    return array;
}

let data = [3, 29, 12, 34, 16, 1, 6, 2];

let sortedArray = selectionSort(data);
console.log(sortedArray);