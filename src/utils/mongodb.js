import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DB)
        console.log("Mongodb connected!")
    } catch (error) {
        console.log(error)
    }
}
export default connectMongoDB;