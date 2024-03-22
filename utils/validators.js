const validator = require('validator')

const emailValidator = email => validator.isEmail(email)

const phoneValidator = phone => validator.isMobilePhone(phone)

const strongPassword = password => validator.isStrongPassword(password)

const dobValidator = dob => validator.isDate(dob)


module.exports = { emailValidator, phoneValidator, strongPassword, dobValidator }