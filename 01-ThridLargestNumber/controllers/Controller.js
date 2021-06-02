const { run } = require("../services/Services")

/**
 * Rest endpoint for "/thirdLargest" to get third largest number from array
 * @param {request} req request object
 * @param {response} res response object
 */
async function findThirdLargest(req, res) {
    const findThirdLargest = await run(req).then(data => {
        res.status(200).json({
            data
        });
    }).catch(
        res.status(404)
    )

}
module.exports = findThirdLargest;