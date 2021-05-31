const router = require("express").Router();
const { findLetterRepetation, findWordRepitation } = require("./controllers/Controller");

router.post("/find-letter-repitation", findLetterRepetation);
router.post("/find-word-repitation", findWordRepitation);

module.exports = router;