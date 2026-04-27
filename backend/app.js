import express from 'express'
import { connectdb } from './config/db.js'
import cors from "cors"
import user from "./route/userroute.js"
const app=express()

app.use(express.json()) 
app.use(cors())    
connectdb()


app.get("/data",(req,res)=>{
res.send("backend working")
})

app.use("/api/",user)
export default app