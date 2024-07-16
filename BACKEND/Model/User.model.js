import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        email: {
            type: String,
          
            unique: true,
            trim: true, 
        },
        fullname: {
            type: String,
          
            trim: true, 
            index: true
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },


    },
    {
        timestamps: true
    }
)
const User=mongoose.model("User",userSchema);

export default User;