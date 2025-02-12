const router = require("express").Router()
const aiController = require("../controller/ai.controller")

router.post("/get-review", aiController.getReview )


module.exports = router