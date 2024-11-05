const mongoose = require('mongoose');

// Connect to MongoDB using environment variables (recommended for security)
//require('dotenv').config();
//const mongoURI = process.env.MONGODB_URI;
///////////
     mongoose.connect("mongodb+srv://lalatendumaharana0:lala1234@cluster0.vnbsj.mongodb.net/")

// Define the user schema
const userSchema =mongoose.Schema({
  user_name: String,
  email: String,
  password: String,
});

// Create the User model
const User = mongoose.model('user_info', userSchema);

// Export the User model
module.exports = User;

/*
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/api_project");
//mongoose.connect("mongodb+srv://lalatendumaharana0:lalatendu1234@cluster0.vnbsj.mongodb.net/");
const userSchema=mongoose.Schema({
    user_name:String,
    email:String,
    password:String
})

module.exports=mongoose.model("user_info",userSchema);*/