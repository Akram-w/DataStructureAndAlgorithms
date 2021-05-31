const router = require("express").Router();
const findAnagrom = require("./controllers/Controller");

router.post("/anagram", findAnagrom);

module.exports = router;