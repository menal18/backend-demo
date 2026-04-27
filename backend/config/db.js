import mongoose from "mongoose";

export const connectdb =()=>{mongoose.connect("mongodb://localhost:27017/")
.then(()=>{
    console.log("connected")
}
)
.catch((err)=>{
    console.log(err)
})
}