const DataModel = require("../models/Product.model");
const { UserModel }= require("../models/User.model")
const PostItems= async (Mail) =>{
    console.log(Mail);
    try {
        const PostsData = await UserModel.aggregate([
            { $match: { Mail: Mail } },
            {
              $lookup: {
                from: "data",
                localField: "Problems.productId",
                foreignField: "_id",
                as: "PostItems",
              },
            },
        ]);
        return {
            message: "Posts received successfully",
            status: "success",
            data:PostsData[0].PostItems,
        };
    } catch (error) {
        return { message: "something went wrong", status: "error" };
    }
}

const Completed=async(id)=>{
    try {
        await DataModel.findByIdAndUpdate(id,{isCompleted:true})
        return {
            message: "item marked as completed",
            status: "success",
        };
    } catch (error) {
        return { message: "something went wrong", status: "error" };
    }
}


const Delete=async(id)=>{
    try {
        await DataModel.findByIdAndDelete(id)
        return {
            message: "item deleted successfully",
            status: "success",
        };
    } catch (error) {
        return { message: "something went wrong", status: "error" };
    }
}

module.exports={ PostItems, Completed, Delete }