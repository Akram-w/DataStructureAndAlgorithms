/**
 * function to find the missing number from number sequence array
 * @param {array} array The array of numbers
 * @returns {string} The description about which number is missing
 */
function findMissingNumber(array) {
    let map = getArrayDetails(array);

    let totalFromLowtoHigh = findTotalBetweenNumbers(map.get('lowest'), map.get('highest'));

    let difference = totalFromLowtoHigh - map.get('total')

    if (difference < 1) {
        return `Missing Number is ${map.get('lowest') - 1} or ${map.get('highest') + 1}`;
    }
    return `Missing Number is ${difference}`
}

/**
 * function to get details of array like highest,lowest and total of array
 * @param {array} array The array of numbers    
 * @returns {map} The map which include highest, lowest and total from the given array
 */
function getArrayDetails(array) {
    let lowest = array[0];
    let highest = 0;
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (lowest > element) {
            lowest = element;
        }
        if (highest < element) {
            highest = element;
        }
        total += element;
    }
    let map = new Map();
    map.set('lowest', lowest);
    map.set('highest', highest);
    map.set('total', total);
    return map;
}

/**
 * function to get total between given to numbers
 * @param {number} lowest starting number
 * @param {number} highest ending number
 * @returns {number} The total between the given higest and lowest number
 */
function findTotalBetweenNumbers(lowest, highest) {
    let total = 0;
    for (let i = lowest; i <= highest; i++) {
        total += i;
    }
    return total;
}
/**
 * the main run function to find missiong number from sequece
 * @param {req} req http request
 * @returns {promice} The promise object to resolve missing number from sequest
 */
function run(req) {
    return new Promise((resolve, reject) => {
        try {
            let array = req.body.array;
            resolve(findMissingNumber(array));
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = { run };
// let data = [2, 4, 6, 5];
// findMissingNumber(data)