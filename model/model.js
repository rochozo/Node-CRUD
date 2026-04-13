
//model/model.js
import { Schema, model } from 'mongoose';

const dataSchema = new Schema({
    name:{
        required:true,
        type: String
    },
    age: {
        required:true,
        type: Number    
    }

})

export default model('Data', dataSchema);