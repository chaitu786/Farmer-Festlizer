const { UserModel, SellerModel } = require('../models/User.model');


const SignUpUser = async ( First_Name,Last_Name,Mobile,Mail,Password,role ) =>{
    try {
        const former = await UserModel.findOne({ Mobile });
        const seller = await SellerModel.findOne({ Mobile });
        if (former || seller) {
          return { message: "user already exists", status: "exists" };
        } else{
            if(role=="Former"){
                let newFormerData = {
                    First_Name,
                    Last_Name,
                    Mobile,
                    Mail,
                    Password,
                    role,
                    Problems: [],
                };
                const newUser = new UserModel(newFormerData);
                newUser.save();
                return { message: "user created", status: "success" };
            }
            else{
                let newSellerData = {
                    First_Name,
                    Last_Name,
                    Mobile,
                    Mail,
                    Password,
                    role,
                    Cart: [],
                };
                const newUser = new SellerModel(newSellerData);
                newUser.save();
                return { message: "user created", status: "success" };
            }
          
        }
      } catch (err) {
        return { message: "something went wrong", status: "error" };
    }
}

const LoginUser= async (Mobile,Password)=>{
    const seller = await SellerModel.find({ Mobile })
    const former= await UserModel.find({ Mobile })
    try {
        
        if(former[0]){
            let value=former[0].Mail
            if(former[0].Password===Password && former[0].role==="Former"){
                return { message: "login success", status: "success", value };
            }
            else{
                return { message: "Invalid Password", status: "failed" };
            }
        }
        else if(seller[0]){
            let value=seller[0].Mail
            if(seller[0].Password===Password && seller[0].role==="Seller"){
                return { message: "login success", status: "success", value };
            }
            else{
                return { message: "Invalid Password", status: "failed" };
            }
        }
        else{
            return { message: "user does not exist", status: "failed" };
        }
    } catch (error) {
        return { message: "something went wrong", status: "error" };
    }
}

module.exports = { SignUpUser, LoginUser }