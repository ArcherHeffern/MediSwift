import mongoose, { Model } from 'mongoose';
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

const Drug: Model<any> = mongoose.model('Drug', drugSchema);
export default Drug;
