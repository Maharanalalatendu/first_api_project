const mongoose = require('mongoose');

// Connect to MongoDB using environment variables (recommended for security)
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;

(async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true, // Use the new MongoDB URL parser
      useUnifiedTopology: true, // Use the new MongoDB driver's connection management
    });
    console.log('MongoDB Connected Successfully');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1); // Exit the application on connection failure
  }
})();

// Define the user schema
const userSchema = new mongoose.Schema({
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