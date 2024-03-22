const Admin = require("../models/admin.model")
const Agent = require("../models/agent.model")
const User = require("../models/user.model")

const UserCreator = details => User.create(details)

const AgentCreator = details => Agent.create(details)

const AdminCreator = details => Admin.create(details)

module.exports = { UserCreator, AgentCreator, AdminCreator }