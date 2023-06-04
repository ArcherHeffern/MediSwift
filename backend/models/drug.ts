import mongoose from 'mongoose';
const drugSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: 
        {
            type: Number,
            required: true,
        }, 
    description: String,
    quantity: 
        { 
            type: Number,
            required: true,
        },

});

export default mongoose.models.Drug || mongoose.model('Drug', drugSchema);
