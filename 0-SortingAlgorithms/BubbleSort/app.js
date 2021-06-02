/**
function to sort array by using Bubble sort algorithm 
@param array
@return array
*/
function bubbleSort(elements) {
    let array = filterArray(elements);
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - i); j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    return array;
}
/** 
method to filter Array and seperate numbers and String
@param array
@return array
*/
function filterArray(array) {
    let numArray = [];
    let charArray = []
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            numArray.push(array[i])
        } else {
            charArray.push(array[i])
        }
    }
    return [...numArray, ...charArray];
}
let dataSet = [3, 2, 32, 39, 23, 545, 234, 34555, 22];

let sortedArray = bubbleSort(dataSet);
console.log(sortedArray);