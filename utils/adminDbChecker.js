const Admin = require("../models/admin.model");

const adminEmailExists = email => Admin.findOne({email})

const adminPhoneExists = phone => Admin.findOne({phone})

module.exports = { adminEmailExists, adminPhoneExists }