import mongoose from "mongoose";

 export const ExpenceSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        maxLength: 20
    },
    type:{
        type: String,
        required: true,
        default: 'expences',
        maxLength: 20
    },
    amount:{
        type: Number,
        required: true,
        trim: true
    },
    category:{
        type: String,
        required: true,
        trim: true
    },
    date:{
        type: Date,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    }
}, {timestamps : true})

export default mongoose.model('Expence', ExpenceSchema)