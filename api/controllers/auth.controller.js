import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { errorHandler } from '../utils/error.js'
import { Mongoose } from 'mongoose'
import jwt from 'jsonwebtoken'

const signup = async (req,res,next) =>{
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

const signin = async(req,res,next) =>{
    try{
        const {email, password} = req.body
        const validUser = await User.findOne({email})
        if (!validUser){
            return next(errorHandler(404,"User Not Found"))
        }
        const passMatch = bcrypt.compareSync(password, validUser.password)
        if(!passMatch){
            return next(errorHandler(401,"Wrong credentails - Username or password is incorrect"))
        }
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)
        const {password:pass,...rest} = validUser._doc // we are using pass here because i have already defined a const called password
        res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest)
        ///http only true no toher 3rd party apps can have access to make cookies safer
    }
    catch(error){
        next(error)
    }
}

const google = async(req,res,next) =>{
    try{
        const user = await User.findOne({email:req.body.email})
        if (user){
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
            const {password:pass,...rest} = user._doc // we are using pass here because i have already defined a const called password          
            res
            .cookie('access_token',token,{httpOnly:true})
            .status(200)
            .json(rest)   
        }
        else{
            // if user does not exist then create one
            const generatedPassword = Math.random().toString(36).slice(-8) // slice -8 gives last 8 char 
            const hashedPassword = bcrypt.hashSync(generatedPassword)
            const newUser = new User ({
                //name: easwarn potti to easwaranpotti+ a number to make it unique 
                userName:String(req.body.name).split(' ').join('').toLowerCase().concat(Math.floor(Math.random()*10000)),
                email:req.body.email, 
                password:hashedPassword,
                avatar:req.body.photo
            })
            await newUser.save()
            const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET)
            console.log(user)
            const {password:pass,...rest} = newUser 
            console.log(rest)
            res
            .cookie('access_token',token,{httpOnly:true})
            .status(200)
            .json(rest)  
        }
    }
    catch(error){
        next(error)
    }
    
}

const signout = async(req,res,next) =>{
    try{
        res.clearCookie('access_token')
        res.status(200).json({"message":"user signed out"})
    }
    catch(error){
        next(error)
    }
}


export default {signup, signin, signout,google}