const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

const password = async (secret, passphrase, length) => {
    const {stdout, stderr} = await exec(`/passmx/binaries/passmx -s "${secret}" -p "${passphrase}" -l ${length}`)
    if (!!stderr) return null
    return stdout.trim()
}

module.exports = {
    password
}