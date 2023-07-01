const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Please enter a title of a blog"],
        trim: true,
        maxLength:[20, "blog name not exceed than 20 characters"]
    },
    description:{
        type:String,
        required:[true, "Please add a description of your product"],
        maxlength:[4000,"Description is can not exceed than 4000 characters"]
    },
    state:{
        type:String,
        required: [true, "Please add a price for your product"],
    },
    city:{
        type:String,
    },
    images:[
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            },
        }
    ],
    category:{
        type: String,
        required:[true,"Please add a category of your product"],
    },
    likes: {
        type: Array,
    },
    disLikes: {
        type:Array
    },
  createAt:{
      type:Date,
      default: Date.now()
  }
})

module.exports = mongoose.model("Blog",blogSchema);