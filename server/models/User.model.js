const { Schema, model } = require("mongoose");

const FormerSchema = new Schema(
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
            enum:["Former","Seller"]
        }
    },
    { collection: "former" }
)

const UserModel = model("UserModel", FormerSchema, "user");

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
            enum:["Former","Seller"]
        }
    },
    { collection: "Seller" }
)

const SellerModel = model("SellerModel", SellerSchema, "Seller");

module.exports = { UserModel, SellerModel };