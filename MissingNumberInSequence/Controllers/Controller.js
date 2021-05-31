const { run } = require("../Services/Serivce")

/**
 * Rest endpoint for "/findMissing" to get missing number from array
 * @param {req} req http request object
 * @param {res} res http response object
 */
async function findMissing(req, res) {
    const missingNumber = await run(req).then(data => {
        res.status(200).json({
            data: data
        });
    }).catch(
        res.status(404)
    )

}
module.exports = findMissing;