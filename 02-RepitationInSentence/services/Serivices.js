/**
 * function to get the count of each repitation of letter
 * @param {string} sentence String to get Repitation count
 * @returns {Object} A object from map which include letter and its count
 */
function findLetterRepitaion(sentence) {
    let array = Array.from(sentence);
    let map = new Map();
    for (let i = 0; i < array.length; i++) {
        if (array[i].trim()) {
            let char = array[i].toLowerCase();
            if (map.has(char)) {
                let value = map.get(char);
                map.set(char, ++value);
            } else {
                map.set(char, 1);
            }
        }
    }
    console.log(map)
    return Object.fromEntries(map);
}
/**
 * function to get the count of each repitation of word
 * @param {string} sentence String to get Repitation count
 * @returns {Object} A object from map which include word and its count
 */
function findWordRepitation(sentence) {
    let array = sentence.split(" ");
    let map = new Map();

    for (let i = 0; i < array.length; i++) {
        if (array[i].trim()) {
            let char = array[i].toLowerCase();
            if (map.has(char)) {
                let value = map.get(char);
                map.set(char, ++value);
            } else {
                map.set(char, 1);
            }
        }
        console.log(map)
    }
    return Object.fromEntries(map)
}

/**
 * The run function for get Word Repitaion count
 * @param {request} req http Request object
 * @returns {Promise} The promise for word repiation
 */
function runWordRepitition(req) {
    return new Promise((resolve, reject) => {
        try {
            let sentence = req.body.sentence;
            console.log(sentence)
            let response = findWordRepitation(sentence);
            console.log('res', response)
            resolve(response);
        } catch (e) {
            reject(e);
        }
    })
}
/**
 * The run function for get Letter Repitaion count
 * @param {request} req http Request object
 * @returns {Promise} The promise for letter repiation
 */
function runLetterRepitition(req) {
    return new Promise((resolve, reject) => {
        try {
            let sentence = req.body.sentence;
            console.log(sentence)
            let response = findLetterRepitaion(sentence);
            console.log('res', response)
            resolve(response);
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = { runLetterRepitition, runWordRepitition }
let sentence = "Hi i am waseem";
console.log(findLetterRepitaion(sentence));