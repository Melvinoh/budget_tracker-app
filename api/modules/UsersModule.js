import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
        maxLength:20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        maxLength:20,
        unique: true
    },
    pasword: {
        type: String,
        required: true,
        maxLength:20,
    },
    img:{
        type: String,
        required: false
    }
})
export default mongoose.model('user', UserSchema)
