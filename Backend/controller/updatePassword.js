const Users = require("../model/Users");

const updatePassword=async(req,res)=>{
    console.log("i am working");
    // console.log(req.body);
const { email, newPassword } = req.body;
console.log(email+" "+newPassword);
 const user =await Users.updateOne({ email:email }, { $set: { password:newPassword } })
 res.send(user);
}


module.exports = updatePassword;