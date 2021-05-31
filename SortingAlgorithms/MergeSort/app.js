/**
 * 
 * @param {array} array The data array to sort
 * @returns {array} Sorted array
 */
function mergeSort(array) {
    let midpoint = array.length / 2;

    if (array.length < 2) {
        return array;
    }

    let leftPart = array.splice(0, midpoint);

    return merge(mergeSort(leftPart), mergeSort(array));
}
/**
 * function to get two array and sort it to one array
 * @param {array} left The first array to merge
 * @param {array} right The secon array to merge
 * @returns {array} sorted array from the given two arrays
 */
function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right];
}

let data = [3, 29, 12, 34, 12, 1, 6, 2];

let sortedArray = mergeSort(data);
console.log(sortedArray)