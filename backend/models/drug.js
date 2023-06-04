"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const drugSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.models.Drug || mongoose_1.default.model('Drug', drugSchema);
