const router = require("express").Router();
const findThirdLargest = require("./controllers/Controller");

router.post("/third-largest", findThirdLargest);

module.exports = router;