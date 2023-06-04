import dotenv from 'dotenv'
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
const app = express();
dotenv.config();

console.log(process.env.DB_USERNAME, process.env.DB_PASSWORD)
if (!process.env.DB_USERNAME || !process.env.DB_PASSWORD) {
    console.error('Please set DB_USERNAME and DB_PASSWORD in .env file');
    process.exit(1);
}

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mediswift.flih4gw.mongodb.net/`);



app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Express running at http://127.0.0.1:${PORT}`);
});



