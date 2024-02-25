const {body} = require('express-validator')
const {validate} = require('./index')

const password = [
    body('secret', 'Type: String').isString().notEmpty(),
    body('passphrase', 'Type: String').isString().notEmpty(),
    body('length', 'Type: Int, Min-Length: 4').default(8).toInt().isInt({min: 4}),
    validate
]

module.exports = {
    password
}
