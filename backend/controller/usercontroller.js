import User from "../model/usermodel.js";

export const register=async(req,res)=>{
 const user =await User.create(req.body)
//  res.status(200).json({"msg":"sucess",user})
    res.json({
      msg: "success",
      user
    });
}