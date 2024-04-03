import User from '../models/user.model.js'

const login = async (req,res) =>{
    const {userName, email, password} = req.body
    const newUser = new User({userName, email, password})
    await newUser.save()
}

export default {login}