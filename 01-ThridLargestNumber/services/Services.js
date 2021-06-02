/**
 * function to get third largest number from array
 * @param {array} array The array of number
 * @returns {string} The string describe about third largest number
 */
function findThirdLargest(array) {

    for (let i = 0; i < 3; i++) {
        let largest = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[largest] < array[j]) {
                largest = j;
            }
        }
        if (largest != i) {
            [array[largest], array[i]] = [array[i], array[largest]];
        }
    }
    return `Third Largest number is ${array[2]}`;
}
/**
 * The running function for get thrid largest number from array
 * @param {request} req http request object
 * @returns {Promise} Promise that resolves the third largest number from array
 */
function run(req) {
    return new Promise((resolve, reject) => {
        try {
            let array = req.body.array;
            resolve(findThirdLargest(array));
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = { run };