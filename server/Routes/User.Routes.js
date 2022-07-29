const { Router }=require("express");
const { SignUpUser,LoginUser, getAllUsers } = require("../Controller/User.controller");
const userRouter = Router();

// create user
userRouter.post("/signup", async(req,res)=>{
    const { First_Name,Last_Name,Mobile,Mail,Password,role } = req.body
    if(Mobile.toString().length!==10){
        return res.send(200).send({message:"Invalid Mobile Number"})
    }
    const { message, status }= await SignUpUser(
        First_Name,
        Last_Name,
        Mobile.toString(),
        Mail,
        Password,
        role
    )
    if (status === "error") {
        return res.status(404).send({ message, status });
    } else if (status === "exists") {
        return res.status(200).send({ message, status });
    }
    return res.status(200).send({ message, status });
})

//login
userRouter.post("/login", async (req, res) => {
    const { Mobile, Password } = req.body;
    if (Mobile.toString().length !== 10) {
        return res.status(200).send({ message: "Invalid Mobile Number" });
    }
    const { message, status, value, data } = await LoginUser(Mobile.toString(), Password);
    if (status === "error") {
      return res.status(404).send({ message, status });
    } else if (status === "failed") {
      return res.status(201).send({ message, status });
    }
    return res
      .cookie("auth", value, { httpOnly: true, secure: false, maxAge:86400000 })
      .status(200)
      .send({ message, status, value, data });
});

userRouter.get("/logout",async(req,res)=>{
    res.clearCookie("auth").status(200).send(
        {message:"user logout successfully", status:"success"}
    )
})

userRouter.get("/users",async(req,res)=>{
    const Mail=req.cookies.auth
    if(Mail===null || undefined){
        return res
        .status(401)
        .send({ message: "session expired", status: "user logged out" });
    }
    const { message, status, data } = await getAllUsers(Mail);
    if (status === "error") {
        return res.status(404).send({ message, status, data });
    }
    return res.status(200).send({ message, status, data });
})

module.exports = userRouter