import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { errorHandler } from '../utils/error.js'

const login = async (req,res,next) =>{
    try{
        const {userName, email, password} = req.body
        const hashedPassword = bcrypt.hashSync(password)
        console.log(hashedPassword)
        const newUser = new User({userName, email, password:hashedPassword})
        await newUser.save()
        res.json({"message":"user created successfully"})
    }
    catch(err){
        next(err)
    }
}

export default {login}