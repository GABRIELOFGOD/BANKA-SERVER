const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const adminSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    },
    password:{
        type:String,
    },
    role: {
        type: String,
        default: 'admin'
    },
    banned: {
        type: Boolean,
        default: false
    }
});

//Export the model
const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin