const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const agentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
    },
    phone:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
    },
    bvn: Number,
    address: String,
    city: String,
    country: String,
    state: String,
    commercialBank: [{
        type: mongoose.Types.ObjectId,
        ref: 'Bank'
    }],
    verified: {
        type:Boolean,
        default: false
    },
    banned: {
        type:Boolean,
        default: false
    },
    dob: Date,
    nin: Number,
    role: {
        type: String,
        defalt: 'agent'
    },
    account_balance: {
        type: Number,
        default: 0
    },
    isLoan: {
        type: Boolean,
        default: false
    },
    loan_balance: {
        type: Number,
        default: 0
    },
    registerBy:{
        type:mongoose.Types.ObjectId,
        ref: 'Admin'
    }
}, { timestamps:true });

//Export the model
const Agent = mongoose.model('Agent', agentSchema);

module.exports = Agent