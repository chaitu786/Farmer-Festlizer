const { UserModel, SellerModel } = require('../models/User.model');


const SignUpUser = async ( First_Name,Last_Name,Mobile,Mail,Password,role ) =>{
    console.log(Mail);
    try {
        const farmer = await UserModel.findOne({ Mobile });
        const seller = await SellerModel.findOne({ Mobile });
        if (farmer || seller) {
          return { message: "user already exists", status: "exists" };
        } else{
            if(role=="Farmer"){
                let newfarmerData = {
                    First_Name,
                    Last_Name,
                    Mobile,
                    Mail,
                    Password,
                    role,
                    Problems: [],
                };
                const newUser = new UserModel(newfarmerData);
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
    const farmer= await UserModel.find({ Mobile })
    try {
        
        if(farmer[0]){
            let value=farmer[0].Mail
            if(farmer[0].Password == Password && farmer[0].role=="Farmer"){
                return { message: "login success", status: "success", value, data:farmer[0] };
            }
            else{
                return { message: "Invalid Password", status: "failed" };
            }
        }
        else if(seller[0]){
            let value=seller[0].Mail
            if(seller[0].Password == Password && seller[0].role=="Seller"){
                return { message: "login success", status: "success", value ,data:seller[0] };
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

const getAllUsers=async(Mail)=>{
    const seller = await SellerModel.find({ Mail })
    const farmer= await UserModel.find({ Mail })
    try {
        if(farmer[0]){
            if(farmer[0].role=="Farmer"){
                return { message: "user data recieved", status: "success", data:farmer };
            }
        }
        else{
            if(seller[0].role=="Seller"){
                return { message: "user data recieved", status: "success", data:seller };
            }
        }
    } catch (error) {
        return { message: "something went wrong", status: "error" };
    }
}

module.exports = { SignUpUser, LoginUser, getAllUsers }