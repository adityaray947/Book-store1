import mongoose from "mongoose";


const bookSchema=mongoose.Schema(
    {

    name : {
            type:String,
            required:true
    },
    price : {
        type:Number,
        required:true
    },
    cateogory : {
        type:String,
        required:true
    } ,
    image : {
        type:String,
        required:true
    }  ,
    title : {
        type:String,
        required:true
}
    
}

)

export const Book = mongoose.model("book",bookSchema);