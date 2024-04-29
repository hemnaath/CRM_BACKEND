const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type:String, require:true},
    username:{type: String, require:true, unique:true},
    password:{type:String, require:true},
    email:{type:String, require:true, unique:true},
    role:{type:String, require:true},
    org_id:{type:mongoose.Schema.Types.ObjectId},
    filename:{type:String},
    filepath:{type:String},
    filetype:{type:String},
    filesize:{type:String}
},
{
    timestamps:true
});

const user = mongoose.model('user', userSchema);

module.exports = user;