const DataModel=require("../models/Product.model");
const { UserModel, SellerModel } = require("../models/User.model");

const getAllData=async()=>{
    try {
        const data = await DataModel.find();
        return {
          message: "data obtained successfully",
          status: "success",
          data: data,
        };
    }
    catch (err) {
        return { message: "something went wrong", status: "error", data: null };
    }
}

const UploadIssue= async ( Title, Image_Url, Category,Desc, Number, Mail,Status, isCompleted )=>{
    let Data=await UserModel.find({Mail})
    console.log(Data[0].Mobile);
    let Issue={
        Title,
        Image_Url,
        Category, 
        Desc,
        Number:Data[0].Mobile,
        Status:true, 
        isCompleted:false
    }
    const newIssue= new DataModel(Issue)
    newIssue.save();
    return { message: "data uploaded", status: "success", value:newIssue };
}

const addToCart=async(id,Mail)=>{
    try {
        const data = await DataModel.findById(id);
        await SellerModel.updateOne(
          { Mail },
          { $push: { Cart: { productId: data._id } } }
        );
        await DataModel.findByIdAndUpdate(id,{Status:false})
        return {
          message: "item added to cart",
          status: "success",
    
        };
    } catch (err) {
        return { message: "something went wrong", status: "error" };
    }
}
module.exports = {
    getAllData,
    UploadIssue, 
    addToCart,
};