import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'

const app = express()

mongoose.connect(process.env.MONGO)
.then(()=>{console.log("Connection to mongo db is successful")})
.catch((err)=>{console.log(err)})

app.use(express.json())
app.use('/api/user/',userRoutes)
app.use('/api/auth/',authRoutes)

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode ||500;
    const message = err.message ||"Internal server error"
    return res.status(statusCode).json({
        success:false,
        statusCode, // after es6 if variable and key have same name then we can remove one of them
        message
    })
})

app.listen(3000, ()=>{
    console.log("Server is running at port 3000!")
})