const { Schema, model } = require("mongoose")

const ProblemSchema = new Schema(
    {
        Title:String,
        Image_Url:String,
        Category:String,
        Desc:String,
        Name:String,
        Number:String,
        isCompleted:Boolean,
        Status:Boolean
    },
    {timestamps: true},
    { collection: "data" }
)

const DataModel = model("DataModel", ProblemSchema, "data");

module.exports = DataModel;
