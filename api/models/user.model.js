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
    avatar:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png"
    },
},
{timestamps: true}
)

const user = mongoose.model('user',userSchema)
export default user