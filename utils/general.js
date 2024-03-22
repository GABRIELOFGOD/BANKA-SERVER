const bcrypt = require('bcrypt')

const salt = async () => await bcrypt.genSalt(10)

const passwordHasher = password => bcrypt.hash(password, salt)

module.exports = { passwordHasher }