import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
   
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
   
   

});

export const User = mongoose.model("user", userSchema);
