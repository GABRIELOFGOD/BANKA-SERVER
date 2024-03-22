const Agent = require("../models/agent.model");

const agentEmailChecker = email => Agent.findOne({email})
const agentPhoneExists = phone => Agent.findOne({phone})
const agentBVNexists = bvn => Agent.findOne({bvn})
const agentNINexists = nin => Agent.findOne({nin})


// ===================== GETTING INFORMATION ======================== //
const gettingAllAgents = () => Agent.find()



module.exports = { agentEmailChecker, agentPhoneExists, agentBVNexists, agentNINexists, gettingAllAgents }