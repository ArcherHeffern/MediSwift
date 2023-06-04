"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.models.User || mongoose_1.default.model('User', userSchema);
