
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();


const db = async () => {
    try {
        mongoose.set('strictQuery', false )
        await mongoose.connect(process.env.MONGO_URL)
        console.log('db connected')
    } catch (error) {
        console.log(' db not connected')
    }
}

export default db