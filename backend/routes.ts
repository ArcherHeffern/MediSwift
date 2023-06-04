import express from 'express';
import userController from './controllers/userController';


const router = express.Router();
router.get('/', (req, res) => {
    res.send("connected!").status(200);
});

router.get("/users/new", 



export default router;