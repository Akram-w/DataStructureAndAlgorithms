const { run } = require("../serivices/Serivice")

/**
 * Rest endPoint for "/anagram" to check wheter compare words to check anagrom
 * @param {request} req http request object
 * @param {response} res http response object
 */
async function findAnagram(req, res) {
    const anagram = await run(req).then(data => {
        res.status(200).json({
            data: data
        });
    }).catch(
        res.status(404)
    )

}
module.exports = findAnagram;