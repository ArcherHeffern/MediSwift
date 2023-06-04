import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
const app = express();
dotenv.config();

console.log(process.env.DB_USERNAME, process.env.DB_PASSWORD)

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mediswift.flih4gw.mongodb.net/`);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Express running at http://127.0.0.1:${PORT}`);
});



