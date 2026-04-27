import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    name:String
})

const User = mongoose.model("User",userschema)
export default User;