/**
 * function to sort array using Quick sort algorithm    
 * @param {array} array The array to sort
 * @param {number} start The start index of the array 
 * @param {number} end The end index of the array
 * @returns array
 */
function quickSort(array, start, end) {
    let piviotPoint;
    if (start >= end) {
        return
    }

    piviotPoint = partition(array, start, end);

    quickSort(array, start, piviotPoint - 1);

    quickSort(array, piviotPoint + 1, end);

    return array;
}
/**
 * function to use to partion array from one value
 * @param {array} array The array to devide from a point
 * @param {number} start The starting index to partition
 * @param {number} end The ending index to partition
 * @returns number The point which used to partition array into two sides
 */
function partition(array, start, end) {
    const piviot = array[end];
    let index = start;
    for (let i = start; i < end; i++) {
        if (array[i] < piviot) {
            [array[i], array[index]] = [array[index], array[i]]
            index++;
        }
    }
    [array[index], array[end]] = [array[end], array[index]];
    return index;
}
let data = [3, 29, 12, 34, 12, 1, 6, 2];

let quickSortedArray = quickSort(data, 0, data.length - 1);
console.log(quickSortedArray)