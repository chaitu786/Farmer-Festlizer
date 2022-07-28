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

module.exports=cartItems