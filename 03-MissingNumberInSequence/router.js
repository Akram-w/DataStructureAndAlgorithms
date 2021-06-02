const router = require("express").Router();
const findMissing = require("./controllers/Controller");

router.post("/find-missing", findMissing);

module.exports = router;