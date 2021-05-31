const { runWordRepitition, runLetterRepitition } = require("../services/Serivices")

/**
 * Rest endpoind for "/findLetterRepitation" for get letter repitation of sentence
 * @param {request} req http request object
 * @param {res} res http Response object
 */
async function findLetterRepetation(req, res) {
    const repiation = await runLetterRepitition(req).then(data => {
        console.log('daa', data)
        res.status(200).json({
            data
        });
    }).catch(
        res.status(404)
    )

}
/**
 * Rest endpoind for "/findWordRepitation" to get word repitation of sentence
 * @param {request} req http request object
 * @param {res} res http Response object
 */
async function findWordRepitation(req, res) {
    const repiation = await runWordRepitition(req).then(data => {
        res.status(200).json({
            data
        })
    }).catch(
        res.status(404)
    )
}
module.exports = { findLetterRepetation, findWordRepitation };