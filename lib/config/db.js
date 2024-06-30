import mongoose from "mongoose";

export const ConnectDB = async()=>{
    await mongoose.connect('mongodb+srv://greatstack:sayalisachin@cluster0.pk63vuf.mongodb.net/')
    console.log("DB Connected");
}