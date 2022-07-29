const { Schema, model } = require("mongoose");

const FarmerSchema = new Schema(
    {
        First_Name:String,
        Last_Name:String,
        Mobile:String,
        Mail:String,
        Password:String,
        Problems:[
            {
                productId: Schema.Types.ObjectId,
            }
        ],
        role:{
            type:String,
            enum:["Farmer","Seller"]
        }
    },
    { collection: "farmer" }
)

const UserModel = model("UserModel", FarmerSchema, "user");

const SellerSchema = new Schema(
    {
        First_Name:String,
        Last_Name:String,
        Mobile:String,
        Mail:String,
        Password:String,
        Cart:[
            {
                productId: Schema.Types.ObjectId,
            }
        ],
        role:{
            type:String,
            enum:["Farmer","Seller"]
        }
    },
    { collection: "Seller" }
)

const SellerModel = model("SellerModel", SellerSchema, "Seller");

module.exports = { UserModel, SellerModel };