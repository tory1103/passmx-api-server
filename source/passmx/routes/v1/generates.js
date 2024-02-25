const express = require("express")
const generates_controler = require("../../controllers/generates")
const generates_validator = require("../../validators/generates")

const router = express.Router()

router.post("/password",
    generates_validator.password,
    generates_controler.password
)

module.exports = router