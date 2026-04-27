import express from 'express'
import { connectdb } from './config/db.js'
import user from "./route/userroute.js"
const app=express()
app.use(express.json()) 
connectdb()

app.use("/api/",user)
export default app