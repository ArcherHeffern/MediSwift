import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import Drug from './models/drug';
import User from './models/user';
const app = express();

mongoose.connect('mongodb+srv://bisrat123:1234@mediswift.flih4gw.mongodb.net/');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Express running → PORT ${PORT}`);
});



