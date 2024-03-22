const User = require("../models/user.model");

const userEmailChecker = email => User.findOne({email})
const userPhoneExists = phone => User.findOne({phone})
const userBVNexists = bvn => User.findOne({bvn})
const userNINexists = nin => User.findOne({nin})

const gettingAllUsers = () => User.find()

module.exports = { userEmailChecker, userPhoneExists, userBVNexists, userNINexists, gettingAllUsers }