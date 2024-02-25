const generates_service = require("../services/generates")

const password = async (req, res) => {
    const {matched_data} = req
    const data = await generates_service.password(matched_data.secret, matched_data.passphrase, matched_data.length)

    if (!data) return res.status(400).send({data: {errors: "Error generating password"}})

    return res.send({
        data: {
            password: data
        }
    })
}

module.exports = {
    password
}