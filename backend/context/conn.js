
import mongoose from "mongoose";

const connectMongoose = async () => {
    try{
        const {connection} = await mongoose.connect("mongodb+srv://dhairya:MRjAZW39fYIDaZTi@cluster0.btqd9sj.mongodb.net/?retryWrites=true&w=majority")

        if (connection.readyState == 1){
            console.log("Connection successful")
        }
    }
    catch(errors){
        return Promise.reject(errors)
    }
}

export default connectMongoose;