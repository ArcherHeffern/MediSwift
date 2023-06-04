import mongoose from 'mongoose';
const drugSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: Number,
    description: String,
    image: String,
    quantity: Number,
});

export default mongoose.models.Drug || mongoose.model('Drug', drugSchema);
