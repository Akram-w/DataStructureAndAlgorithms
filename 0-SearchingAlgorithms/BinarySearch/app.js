/**
 * 
 * @param {array} array The data array
 * @param {number} key The value should search from array
 * @returns {number} The index position of searched number
 */
function binarySearch(array, key) {
    console.log(`Searching value ${key}`)
    let start = 0;
    let end = array.length;

    while (start <= end) {
        let midPoint = Math.floor((start + end) / 2);

        if (array[midPoint] == key) {
            return midPoint;
        } else if (array[midPoint] > key) {
            end = midPoint - 1;
        } else {
            start = midPoint + 1;
        }
    }
    return -1;
}
/**
 * function to use array sorting
 * @param {array} array The array of data to sort
 * @returns {array} The sorted array
 */
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - i); j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    return array;
}
let numArray = [3, 29, 12, 34, 12, 1, 6, 2];

let sortedArray = bubbleSort(numArray, 0, numArray.length - 1);
let position = binarySearch(sortedArray, 3);
console.log(`Searched value ${sortedArray[position]} in index ${position}`)