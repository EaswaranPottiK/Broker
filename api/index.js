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
app.use('/api/user/',authRoutes)

app.listen(3000, ()=>{
    console.log("Server is running at port 3000!")
})