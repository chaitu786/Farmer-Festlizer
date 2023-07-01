const { SellerModel }= require("../models/User.model")
const cartItems= async (Mail) =>{
    try {
        const CartData = await SellerModel.aggregate([
            { $match: { Mail: Mail } },
            {
              $lookup: {
                from: "data",
                localField: "Cart.productId",
                foreignField: "_id",
                as: "cartItems",
              },
            },
        ]);
          return {
            message: "cart items received successfully",
            status: "success",
            data:CartData[0].cartItems,
          };
    } catch (error) {
        return { message: "something went wrong", status: "error" };
    }
}

const Completed_Cart=async(id)=>{
  try {
      await SellerModel.findByIdAndUpdate(id,{isCompleted:true})
      return {
          message: "item marked as completed",
          status: "success",
      };
  } catch (error) {
      return { message: "something went wrong", status: "error" };
  }
}


const Delete_Cart=async(id)=>{
  try {
      await SellerModel.findByIdAndDelete(id)
      return {
          message: "item deleted successfully",
          status: "success",
      };
  } catch (error) {
      return { message: "something went wrong", status: "error" };
  }
}

module.exports={cartItems,Delete_Cart,Completed_Cart}