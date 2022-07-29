const {UserModel, SellerModel} = require("../models/User.model");

const authenticate = async (Mail) => {
    console.log(Mail,"ji");
    const user = await UserModel.find({ Mail });
    const seller = await SellerModel.find({ Mail });
  try {
    if(user[0]){
        if (user[0].role==="Farmer") {
            return { user };
        }
    }
    else{
        if (seller[0].role==="Seller") {
            return { seller };
        }
    } 
  } catch (err) {
    return { message: "something went wrong", status: "error" };
  }
};

module.exports = authenticate;
