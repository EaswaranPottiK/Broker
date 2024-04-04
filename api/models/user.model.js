import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
    },
},
{timestamp: true}
)

const user = mongoose.model('user',userSchema)
export default user