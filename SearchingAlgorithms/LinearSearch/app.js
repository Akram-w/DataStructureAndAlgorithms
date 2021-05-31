/**
 * 
 * @param {array} array The data set 
 * @param {number} key The value should search from the array
 * @returns {number} The index position of the array 
 */
function linearSearch(array, key) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == key) {
            return i;
        }
    }
    return -1;
}

let data = [3, 29, 12, 34, 12, 1, 6, 2];

let position = linearSearch(data, '12');
console.log(position);