const mongoose = require("mongoose");
const validate =require('validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  name:{
    type:String,
    unique:true,
    required:true,
  },
  email: {
    type:String,
    required:true,
    index:true,
    unique: true,
    dropDups: true,
    validate(value){
      if(!validate.isEmail(value)){
        throw new Error("Invalid Email")
      }
    }  
  },
  contact_no: {
    type:Number,
    required:true,
    unique:true,
    notEmpty: true,
    errorMessage: "Phone number cannot be empty"
  },
  message: String,
  status: String,
  gender: String,
  city: String,
});

const User = mongoose.model("users", userSchema);

module.exports = User;
