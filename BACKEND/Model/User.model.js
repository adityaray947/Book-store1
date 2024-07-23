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

userSchema.methods.generateToken = function() {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET, 
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};

const User=mongoose.model("User",userSchema);

export default User;