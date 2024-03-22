const { AgentCreator } = require("../config/dbCreator")
const { agentEmailChecker, agentPhoneExists, agentBVNexists, agentNINexists, gettingAllAgents } = require("../utils/agentDbchecker")
const { emailValidator, dobValidator } = require("../utils/validators")

const agentRegistration = async (req, res) => {
    const { fname, lname, phone, email, dob, bvn, nin } = req.body
    try {
        
        // ================ VALIDATING USER INPUT ==================== //
        if(!fname || !lname) return res.status(401).json({error: 'both names are Required, Please input your names', success: false})

        if(!phone) return res.status(401).json({error: 'Please enter your  phone number', success: false})

        if(email){
            const isValidEmail = emailValidator(email)
            if(!isValidEmail) return res.status(401).json({error: 'This is not a valid email address', success: false})
        }

        const isValidDOB = dobValidator(dob)
        if(!dob || !isValidDOB) return res.status(401).json({error: 'Date of birth error', success: false})

        if(!nin || nin.length != 11) return res.status(401).json({error: 'Invalid no/invalid NIN number', success: false})

        // ====================== CHECKING IF INPUTS EXISTS IN THE DATABASE ======================== //
        if(email){
            const isEmailExists = await agentEmailChecker(email);
            if(isEmailExists) return res.status(401).json({error: 'This email has already been attarched to an account', success: false})
        }

        const isPhoneExists = await agentPhoneExists(phone)
        if(isPhoneExists) return res.status(401).json({error: 'This phone number has already been used by another customer', success: false})

        if(bvn){
            const isBVNexists = await agentBVNexists(bvn)
            if(isBVNexists) return res.status(401).json({error: 'This bvn has been attached to another account', success: false})
        }

        const isNINexists = await agentNINexists(nin)
        if(isNINexists) return res.status(401).json({error: 'This nin has been attached to another account', success: false})

        const data = {
            fname, lname, email, phone, nin, bvn, dob
        }

        const newUser = await AgentCreator(data)

        res.status(201).json({message: 'Agent created sucessfully', data: newUser})
        
    } catch (err) {
        res.status(501).json({err, success: false})
    }
}

const allAgentView = async(req, res) => {
    try {
        
        // ========================= GETTING ALL AGENTS ============================== //
        const allAgents = await gettingAllAgents()

        res.status(201).json({message: 'All agents information', success: true, data: allAgents})
    } catch (err) {
        res.status(501).json({err, success: false})
    }
}

module.exports = { agentRegistration, allAgentView }