/**
 * The run function for find whether it is anagram or not
 * @param {request} req http Request object
 * @returns {Promise} The promise for letter repiation
 */
function run(req) {
    return new Promise((resolve, reject) => {
        try {
            let first = req.body.firstWord;
            let second = req.body.secondWord;
            resolve(findAnagram(first, second));
        } catch (e) {
            reject(e);
        }
    })
}
/**
 * function to check compare two words and find anagrom
 * @param {string} firstWord The first word 
 * @param {string} secondWord The second word to check anagrom with firstWord
 * @returns {boolean} The status whether the second word is anagrom of firstWord
 */
function findAnagram(firstWord, secondWord) {
    let firstWordArray = Array.from(firstWord);
    let secondWordArray = Array.from(secondWord);
    let status = false;

    if (firstWordArray.length != secondWordArray.length) {
        return false;
    }

    for (let i = 0; i < secondWordArray.length; i++) {
        let value = secondWordArray[i];
        status = false;
        for (let j = 0; j < firstWordArray.length; j++) {
            if (value == firstWordArray[j]) {
                status = true;
                firstWordArray.splice(j, 1);
                break;
            }
        }
        if (!status) {
            return false;
        }
    }
    if (firstWordArray.length) {
        return false;
    }
    return status;
}
module.exports = { run }