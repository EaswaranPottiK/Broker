const { default: mongoose, Mongoose } = require("mongoose");

const userSchema = new mongoose.userSchema({
    userName:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
},
{timestamp: true}
)

const user = mongoose.model('user',userSchema)
export default user