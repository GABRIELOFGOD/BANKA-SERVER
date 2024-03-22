const { AdminCreator } = require("../config/dbCreator");
const { adminEmailExists, adminPhoneExists } = require("../utils/adminDbChecker");
const { passwordHasher } = require("../utils/general");
const { emailValidator, phoneValidator, strongPassword } = require("../utils/validators");

const adminRegistration = async (req, res) => {
    const { name, email, phone, password } = req.body;
    try {

        // =========================== VALIDATING INPUTS ============================= //
        
        if(!name || !email || !phone || !password) return res.status(401).json({error: 'All input fields are required for admin', success: false})

        const isValidEmail = emailValidator(email)
        if(!isValidEmail) return res.status(401).json({error: 'This is not a valid email address', success: false})

        const isValidPhone = phoneValidator(phone)
        if(!isValidEmail) return res.status(401).json({error:'This is not a valid phone number', success: false})

        const isStrongPassword = strongPassword(password)
        if(!isStrongPassword) return res.status(401).json({error: 'This is password is weak, use at least a uppercase, a lowercase, a number, a special character and must be at least 8 in lenght', success: false})

        // =================================== CHECKING IF INPUTS EXISTS ===================================== //
        const isEmailexists = await adminEmailExists(email)
        if(isEmailexists) return res.status(401).json({error: 'This email address has been registered by another admin', success: false})

        const isPhoneExists = await adminPhoneExists(phone)
        if(isPhoneExists) return res.status(401).json({error: 'This phone number has been registered by another admin', success: false})

        // ============================= HASHIMG PASSWORD =========================== //
        const hashedPassword = await passwordHasher(password)
        
        // =============================== CREATING NEW ADMIN ACCOUNT ================================== //
        const adminData = {name, email, phone, password:hashedPassword}
        
        const newAdmin = await AdminCreator(adminData)

        res.status(201).json({message: 'New Admin created succefully', success: true})
        
    } catch (err) {
        res.status(501).json({err, success: false})
    }
}

module.exports = { adminRegistration }