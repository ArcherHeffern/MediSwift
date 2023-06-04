import mongoose, { Model } from 'mongoose';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: String,
    phone: String,
    isSeller: {
        type: Boolean,
        default: false
    },
});

const User: Model<any> =  mongoose.model('User', userSchema);
export default User;

